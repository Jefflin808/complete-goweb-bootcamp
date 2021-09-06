import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './containers/overview/overview.component';
import { ProductComponent } from './containers/product/product.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'overview', component: OverviewComponent},  
  {path: '', redirectTo:'overview', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
