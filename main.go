package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.Handle("/kit/", http.StripPrefix("/kit/", http.FileServer(http.Dir("kit"))))

	http.Handle("/", http.FileServer(http.Dir("www")))

	http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"status": "ok", "message": "Server is healthy"}`)
	})

	port := "8080"
	fmt.Printf("Server starting on http://localhost:%s\n", port)

	log.Fatal(http.ListenAndServe(":"+port, nil))
}
