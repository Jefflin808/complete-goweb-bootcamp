package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// key value pairs
	kvs := map[string]string{
		"name":    "Scotch",
		"website": "https://scotch.io",
	}

	for key, value := range kvs {
		fmt.Println(key, value)
	}
}
