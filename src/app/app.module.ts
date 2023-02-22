import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductService } from './services/product-service.service';
import { AddProductComponent } from './component/add-product/add-product.component';
import { GetProductComponent } from './component/get-product/get-product.component';
import { DateService } from './services/date/date.service';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    GetProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule
  ],

  providers: [ProductService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
