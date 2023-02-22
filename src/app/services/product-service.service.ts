import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ApiResponse} from '../models/api.response';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = "http://localhost:8080/product";

  constructor(private http: HttpClient ) { }

  public addProduct(product: Product){
    alert("service is called ");
    return this.http.post(this.baseUrl+"/add", product, {responseType:'text' as 'json'});
  }

  public getAllProduct(): Observable<any>{
      return this.http.get(this.baseUrl+"/getAll");
  }

  public getProductById(id: any){
      return this.http.get(this.baseUrl + "/getProduct/" +id);
    }
}
