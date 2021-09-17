package main

import (
	"fmt"
)

func main() {
	Post := map[string]interface{}{
		"ID":         300,
		"Title":      "Moving from NodeJS to Go",
		"Author":     "Christopher Ganga",
		"Difficulty": "Beginner",
	}

	fmt.Println(Post)

	// to access values
	fmt.Println(Post["ID"])
	fmt.Println(Post["Title"])
	fmt.Println(Post["Author"])
	// ....
}
