import { Component } from "@angular/core";
import { Product } from "src/app/models/product";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-overview",
    template: `<h1>overview works</h1>
            <app-card *ngFor="let p of products" [product]="p"></app-card>
    `
})
export class OverviewComponent {
    products: Product[] = []
    constructor(private http:HttpClient) { }

    ngOnInit() {
        this.http.get<Product[]>('http://localhost:8080/api').subscribe(data => {
            this.products = data;
        });
    }
}