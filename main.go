package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type FileInfo struct {
	path    string
	modTime int64
	size    int64
}

func scanFiles(dirs []string) map[string]FileInfo {
	files := make(map[string]FileInfo)

	for _, dir := range dirs {
		filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return nil
			}

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

func isHidden(path string) bool {
	base := filepath.Base(path)
	return len(base) > 0 && base[0] == '.'
}

func hasChanges(old, new map[string]FileInfo) bool {
	if len(old) != len(new) {
		return true
	}

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

func startFileWatcher(dirs []string, interval time.Duration, reload chan bool) {
	fmt.Printf("Watching directories: %v (polling every %v)\n", dirs, interval)

	lastScan := scanFiles(dirs)

	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for range ticker.C {
		currentScan := scanFiles(dirs)

		if hasChanges(lastScan, currentScan) {
			fmt.Println("Files changed, triggering server restart...")
			reload <- true
			lastScan = currentScan
		}
	}
}

/**
 * Sets appropriate MIME type and CORS headers for TypeScript/JavaScript modules
 */
func setModuleHeaders(w http.ResponseWriter, filePath string) {
	// Set CORS headers for ES modules
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Set appropriate MIME type based on file extension
	ext := strings.ToLower(filepath.Ext(filePath))
	switch ext {
	case ".ts":
		w.Header().Set("Content-Type", "application/typescript")
	case ".mts":
		w.Header().Set("Content-Type", "application/typescript")
	case ".js", ".mjs":
		w.Header().Set("Content-Type", "application/javascript")
	case ".json":
		w.Header().Set("Content-Type", "application/json")
	case ".css":
		w.Header().Set("Content-Type", "text/css")
	default:
		w.Header().Set("Content-Type", "text/plain")
	}
}

/**
 * Handles serving lily package files with proper module headers
 */
func serveLilyModule(w http.ResponseWriter, r *http.Request, filePath string) {
	// Handle OPTIONS request for CORS
	if r.Method == "OPTIONS" {
		setModuleHeaders(w, filePath)
		w.WriteHeader(http.StatusOK)
		return
	}

	// Check if file exists
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		http.NotFound(w, r)
		return
	}

	// Set headers and serve file
	setModuleHeaders(w, filePath)
	http.ServeFile(w, r, filePath)
}

func createServer() *http.Server {
	mux := http.NewServeMux()

	// Zimba kit
	mux.Handle("/zimba/", http.StripPrefix("/zimba/", http.FileServer(http.Dir("kit/zimba/dist/"))))

	// Lily CSS (legacy endpoint)
	mux.HandleFunc("/lily", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/css")
		http.ServeFile(w, r, "kit/lily/dist/all.css")
	})

	// Lily module endpoints
	mux.HandleFunc("/lily/mod.ts", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/mod.ts")
	})

	mux.HandleFunc("/lily/mod.js", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/mod.js")
	})

	// Individual CSS files as modules
	mux.HandleFunc("/lily/all.css", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/dist/all.css")
	})

	mux.HandleFunc("/lily/layout.css", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/dist/layout.css")
	})

	mux.HandleFunc("/lily/normalize.css", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/dist/normalize.css")
	})

	mux.HandleFunc("/lily/reset.css", func(w http.ResponseWriter, r *http.Request) {
		serveLilyModule(w, r, "kit/lily/dist/reset.css")
	})

	// Serve entire lily kit with proper headers (for deep imports)
	mux.Handle("/lily/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Remove /lily/ prefix and serve from kit/lily/
		path := strings.TrimPrefix(r.URL.Path, "/lily/")
		fullPath := filepath.Join("kit/lily", path)

		serveLilyModule(w, r, fullPath)
	}))

	// Static files
	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public/"))))

	// Favicon and robots
	mux.HandleFunc("/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/favicon.ico")
	})

	mux.HandleFunc("/favicon.png", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/favicon.png")
	})

	mux.HandleFunc("/robots.txt", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "public/robots.txt")
	})

	// Default route handler
	mux.Handle("/", http.FileServer(http.Dir("routes")))

	// API endpoints
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
	watchDirs := []string{"kit", "public", "routes", "."}

	reload := make(chan bool, 1)
	serverDone := make(chan bool, 1)

	host := os.Getenv("HOST_URL")
	if host == "" {
		host = "http://localhost"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	go startFileWatcher(watchDirs, 500*time.Millisecond, reload)

	fmt.Println("Starting development server with file watching...")

	for {
		server := createServer()
		server.Addr = ":" + port

		go func() {
			fmt.Printf("Server running on %s:%s\n", host, port)

			if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
				log.Printf("Server error: %v\n", err)
			}
			serverDone <- true
		}()

		<-reload
		fmt.Println("Restarting server...")

		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		if err := server.Shutdown(ctx); err != nil {
			log.Printf("Server shutdown error: %v\n", err)
			server.Close()
		}
		cancel()

		<-serverDone
		time.Sleep(200 * time.Millisecond)
	}
}
