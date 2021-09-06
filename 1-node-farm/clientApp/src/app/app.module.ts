import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http' 

import { OverviewComponent } from './containers/overview/overview.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './containers/product/product.component';
import { DetailCompnent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CardComponent,
    ProductComponent,
    DetailCompnent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
