import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
    selector: "app-card",
    template: `  <figure class="card">
                <div class="card__emoji">{{product.image}}{{product.image}}</div>
                <div class="card__title-box">
                <h2 class="card__title">{{product.productName}}</h2>
                </div>

                <div class="card__details">
                <div class="card__detail-box" *ngIf="product.organic">
                <h6 class="card__detail card__detail--organic">Organic!</h6>
                </div>

                <div class="card__detail-box">
                <h6 class="card__detail">{{product.quantity}} per 📦</h6>
                </div>
        
                <div class="card__detail-box">
                <h6 class="card__detail card__detail--price">{{product.price}}€</h6>
                </div>
                </div>

                <a class="card__link" routerLink="/product" [queryParams]="{ id: product.id}">
                <span>Detail <i class="emoji-right">👉</i></span>
                </a>
                </figure>`
}
)
export class CardComponent {
    @Input()
    product: Product;
    constructor() { }

    ngOnInit() {

    }
}