import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    addProduct:Product=new Product();
    submitted=false;
    message: any;
    constructor(private productService:ProductService, private router: Router) { }

    ngOnInit(): void { }

    public addProductDetail(){
        this.submitted=true;
        this.productService.addProduct(this.addProduct)
          .subscribe(data=> {
            this.message=data;
            console.log("Message is : {}", this.message);

          });
        this.router.navigate(['/product']);
    }

    public addProductCancel() {
    }

}
