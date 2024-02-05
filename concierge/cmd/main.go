package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/random-starlord/index-search/concierge/internal/common"
	"github.com/random-starlord/index-search/concierge/pkg/api"
)

func main() {
	common.Log("Adding API handlers...")
	http.HandleFunc("/api/feeder", api.FeedHandler)
	http.HandleFunc("/api/query", api.QueryHandler)

	common.Log("Starting feeder...")
	api.StartFeederSystem()

	port := fmt.Sprintf(":%s", os.Getenv("API_PORT"))
	common.Log(fmt.Sprintf("Starting Index Search Concierge server on port %s...", port))
	http.ListenAndServe(port, nil)
}
