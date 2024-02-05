package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/random-starlord/index-search/librarian/internal/common"
	"github.com/random-starlord/index-search/librarian/pkg/api"
)

func main() {
	common.Log("Adding API handlers...")
	http.HandleFunc("/api/index", api.IndexHandler)
	http.HandleFunc("/api/query", api.QueryHandler)

	common.Log("Starting index...")
	api.StartIndexSystem()

	port := fmt.Sprintf(":%s", os.Getenv("API_PORT"))
	common.Log(fmt.Sprintf("Starting Index Search Librarian server on port %s...", port))
	http.ListenAndServe(port, nil)
}
