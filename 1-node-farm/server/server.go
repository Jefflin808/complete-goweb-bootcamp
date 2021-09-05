package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

type Product struct {
	Id          int    `json:"id"`
	ProductName string `json:"productName"`
	Image       string `json:"image"`
	From        string `json:"from"`
	Nutrients   string `json:"nutrients"`
	Quantity    string `json:"quantity"`
	Price       string `json:"price"`
	Organic     bool   `json:"organic"`
	Description string `json:"description"`
}

var data []byte
var dataObj []Product

func init() {
	var err error
	data, err = ioutil.ReadFile("./dev-data/data.json")
	if err != nil {
		fmt.Println("failed to read data.json")
		return
	}
	err = json.Unmarshal(data, &dataObj)
	if err != nil {
		fmt.Println("failed to get json object")
	}
	//fmt.Printf("%+v", dataObj)
}

func setupCors(w *http.ResponseWriter) {
	//Allow CORS here By * or specific origin
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func main() {
	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		setupCors(&w)
		w.Write(data)
	})
	http.HandleFunc("/product", func(w http.ResponseWriter, r *http.Request) {
		setupCors(&w)
		ids, ok := r.URL.Query()["id"]

		if !ok || len(ids[0]) < 1 {
			log.Println("Url Param 'id' is missing")
			return
		}

		// Query()["id"] will return an array of items,
		// we only want the single item.
		id, _ := strconv.Atoi(ids[0])

		log.Println("Url Param 'id' is: " + ids[0])

		for _, d := range dataObj {
			if d.Id == id {
				json.NewEncoder(w).Encode(d)
				return
			}
		}
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}
