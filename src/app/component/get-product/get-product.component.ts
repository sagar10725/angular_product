import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent  implements OnInit {
      AgLoad: boolean=false;
      products:any[]=[];
       message: any;

constructor (private service:ProductService, private router: Router) {}
ngOnInit() {
    this.GetGiftVoucherList();
  }

      GetGiftVoucherList() {
        this.AgLoad = true;
        this.service.getAllProduct()
        .subscribe((res: any[])=>this.products=res);
      }

      public addProductPage(){
       this.router.navigate(['/product/add']);
      }

      public editProduct(product: Product){
            this.message = this.service.addProduct(product)
            .subscribe((resp_msg: any) => {
                        this.message = resp_msg;
                        console.log(this.message);
                        this.GetGiftVoucherList();
                     });
      }

      public deleteProduct(id: any){
         this.message = this.service.deleteProduct(id)
         .subscribe((msg) => {
            this.message = msg;
            console.log(this.message);
            this.GetGiftVoucherList();
         });
      }
}
