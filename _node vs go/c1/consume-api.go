package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	URL := "https://api.github.com/users"
	res, err := http.Get(URL)
	if err != nil {
		log.Println(err)
		return
	}
	defer res.Body.Close() // for garbage collection

	responseBodyBytes, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Println(err)
		return
	}

	fmt.Println(string(responseBodyBytes))
}

/* further consuming api calls
resp, err := http.Get("http://example.com/")
...
resp, err := http.Post("http://example.com/upload", "image/jpeg", &buf)
...
resp, err := http.PostForm("http://example.com/form",
    url.Values{"key": {"Value"}, "id": {"123"}})
*/
