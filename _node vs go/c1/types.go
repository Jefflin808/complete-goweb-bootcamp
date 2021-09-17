package main

import "fmt"

const num = 3 // declaring a constant

func main() {
	var flt float64 = 2.34     // declaring a float
	var name string = "Scotch" // declaring a string
	a, b := true, false        // shorthand declaration syntax
	fmt.Printf("%v %v %v %v", flt, name, a, b)

	names := []string{"Scotch", "IO"}
	fmt.Printf("%v", names)
}
