package main

import (
	"fmt"
)

type Post struct {
	ID         int
	Title      string
	Author     string
	Difficulty string
}

func main() {
	// create an instance of the Post
	p := Post{
		ID:         300,
		Title:      "Moving from NodeJS to Go",
		Author:     "Christopher Ganga",
		Difficulty: "Beginner",
	}

	fmt.Println(p)

	// to access values
	fmt.Println(p.ID)
	fmt.Println(p.Title)
	fmt.Println(p.Author)
	// ....
}
