package main

import (
	"fmt"
	"os/exec"
)

func main() {
	cmd := exec.Command("sleep", "150")
	err := cmd.Start()
	if err != nil {
		fmt.Println("failed to start command")
	}
	fmt.Println("waiting to finishing...")
	fmt.Printf("%v\n", cmd.Process.Pid)
	fmt.Printf("%v	%v\n", cmd.Args[0], cmd.Args[1])
	cmd.Wait()
	fmt.Println("command finished.")
}
