import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { GetProductComponent } from './component/get-product/get-product.component';

const routes: Routes = [

  {path: '', redirectTo:'product', pathMatch: 'full'},
  {path: 'product/add',  component: AddProductComponent},
  {path: 'product', component: GetProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
