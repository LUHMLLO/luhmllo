package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

/**
 * FileInfo holds metadata about a file for change detection
 * @property {string} path - Full file path
 * @property {int64} modTime - Last modification time as Unix timestamp
 * @property {int64} size - File size in bytes
 */
type FileInfo struct {
	path    string
	modTime int64
	size    int64
}

/**
 * Recursively scans directories and builds a map of file information
 * @param {[]string} dirs - Directories to scan
 * @returns {map[string]FileInfo} Map of file paths to their metadata
 */
func scanFiles(dirs []string) map[string]FileInfo {
	files := make(map[string]FileInfo)

	for _, dir := range dirs {
		filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return nil // Skip files we can't access
			}

			// Skip directories and hidden files
			if !info.IsDir() && !isHidden(path) {
				files[path] = FileInfo{
					path:    path,
					modTime: info.ModTime().Unix(),
					size:    info.Size(),
				}
			}
			return nil
		})
	}

	return files
}

/**
 * Checks if a file path represents a hidden file or directory
 * @param {string} path - File path to check
 * @returns {bool} True if the file is hidden (starts with .)
 */
func isHidden(path string) bool {
	base := filepath.Base(path)
	return len(base) > 0 && base[0] == '.'
}

/**
 * Compares two file maps to detect changes
 * @param {map[string]FileInfo} old - Previous file state
 * @param {map[string]FileInfo} new - Current file state
 * @returns {bool} True if any files have changed
 */
func hasChanges(old, new map[string]FileInfo) bool {
	// Check if file count changed
	if len(old) != len(new) {
		return true
	}

	// Check each file for modifications
	for path, newInfo := range new {
		if oldInfo, exists := old[path]; !exists ||
			oldInfo.modTime != newInfo.modTime ||
			oldInfo.size != newInfo.size {
			fmt.Printf("File changed: %s\n", path)
			return true
		}
	}

	return false
}

/**
 * Starts a file watcher that polls directories for changes
 * @param {[]string} dirs - Directories to monitor
 * @param {time.Duration} interval - How often to check for changes
 * @param {chan bool} reload - Channel to signal when reload is needed
 */
func startFileWatcher(dirs []string, interval time.Duration, reload chan bool) {
	fmt.Printf("Watching directories: %v (polling every %v)\n", dirs, interval)

	lastScan := scanFiles(dirs)

	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for range ticker.C {
		currentScan := scanFiles(dirs)

		if hasChanges(lastScan, currentScan) {
			reload <- true
			lastScan = currentScan
		}
	}
}

/**
 * Creates and configures the HTTP server with all routes
 * @returns {*http.Server} Configured HTTP server instance
 */
func createServer() *http.Server {
	mux := http.NewServeMux()

	mux.Handle("/utils/", http.StripPrefix("/utils/", http.FileServer(http.Dir("kit/utils/dist/"))))
	mux.Handle("/wc/", http.StripPrefix("/wc/", http.FileServer(http.Dir("kit/wc/dist/"))))

	mux.HandleFunc("/styles.css", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/css")
		http.ServeFile(w, r, "kit/css/dist/all.css")
	})

	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public/"))))

	mux.HandleFunc("/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/favicon.ico")
	})

	mux.HandleFunc("/favicon.png", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/favicon.png")
	})

	mux.HandleFunc("/robots.txt", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/robots.txt")
	})

	mux.Handle("/", http.FileServer(http.Dir("routes")))

	// API endpoint
	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"status": "ok", "message": "Server is healthy"}`)
	})

	return &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}
}

func main() {
	// Directories to watch
	watchDirs := []string{"www", "kit", "."}

	// Channels for coordination
	reload := make(chan bool, 1)
	serverDone := make(chan bool, 1)

	// Get the host URL from an environment variable or default to localhost
	host := os.Getenv("HOST_URL")
	if host == "" {
		host = "http://localhost" // Default host for local development
	}

	// Get the PORT from the environment variable.
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port for local development
	}

	// Start file watcher
	go startFileWatcher(watchDirs, 500*time.Millisecond, reload)

	fmt.Println("Starting development server with file watching...")

	for {
		server := createServer()

		// Start server in goroutine
		go func() {
			// Print the full URL with the dynamic host and port
			fmt.Printf("Server running on %s:%s\n", host, port)

			if err := http.ListenAndServe(":"+port, server.Handler); err != http.ErrServerClosed {
				log.Printf("Server error: %v\n", err)
			}
			serverDone <- true
		}()

		// Wait for file changes
		<-reload
		fmt.Println("Files changed, restarting server...")

		// Graceful shutdown
		if err := server.Close(); err != nil {
			log.Printf("Server shutdown error: %v\n", err)
		}

		// Wait for server to actually stop
		<-serverDone

		// Brief pause before restart
		time.Sleep(100 * time.Millisecond)
	}
}
