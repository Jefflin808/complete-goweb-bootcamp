import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
    selector: "app-detail",
    template: `
            <figure class="product">
            <div class="product__organic" *ngIf="product?.organic"><h5>Organic</h5></div>
            <a href="/overview" class="product__back">
                <span class="emoji-left">👈</span>Back
            </a>
            <div class="product__hero">
            <span class="product__emoji product__emoji--1">{{product?.image}}</span>
            </div>
            <h2 class="product__name">{{product?.productName}}</h2>
            <div class="product__details">
            <p><span class="emoji-left">🌍</span>From {{product?.from}}</p>
            <p><span class="emoji-left">❤️</span>{{product?.nutrients}}</p>
            <p><span class="emoji-left">📦</span>{{product?.quantity}}</p>
            <p><span class="emoji-left">🏷</span>{{product?.price}}€</p>
            </div>

            <a href="#" class="product__link">
                <span class="emoji-left">🛒</span>
                <span>Add to shopping card ({{product?.price}}€)</span>
            </a>
            <p class="product__description">
                {{product?.description}}
            </p>
            </figure>
            `
}
)
export class DetailCompnent{
    @Input()
    product: Product;
    constructor(){}
}