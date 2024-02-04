package common

import (
	"fmt"
	"log"
)

func Log(msg string) {
	log.Println("INFO - ", msg)
}

func Warn(msg string) {
	log.Println("---------------------------")
	log.Printf(fmt.Sprintf("WARN: %s", msg))
	log.Println("---------------------------")
}
