import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";

@Component({
    selector: "app-product",
    template: `<div class="container">
            <h1>🌽 Node Farm 🥦</h1>
            <app-detail [product]="product"></app-detail>
            </div>
        `
}
)
export class ProductComponent{
    product: Product;
    constructor(private activeRoute: ActivatedRoute, private http: HttpClient){
    }
    ngOnInit(){
        this.activeRoute.queryParams.subscribe(params =>{
            let id = params['id']
            if (id){
                console.log(id);
                this.http.get<Product>(`http://localhost:8080/product?id=${id}`).subscribe(data => {
                    this.product = data;
                });
            }
        })
    }
}