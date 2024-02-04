package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/ffekirnew/go-project/concierge/internal/common"
	"github.com/ffekirnew/go-project/concierge/pkg/api"
)

func main() {
	common.Log("Adding API handlers...")
	http.HandleFunc("/api/feeder", api.FeedHandler)
	http.HandleFunc("/api/query", api.QueryHandler)

	common.Log("Starting feeder...")
	api.StartFeederSystem()

	port := fmt.Sprintf(":%s", os.Getenv("API_PORT"))
	common.Log(fmt.Sprintf("Starting Goophr Concierge server on port %s...", port))
	http.ListenAndServe(port, nil)
}
