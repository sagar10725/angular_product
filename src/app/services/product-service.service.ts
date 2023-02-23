import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
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
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    return this.http.post(this.baseUrl+"/add", product, {responseType:'text' as 'json'});
  }

  public getAllProduct(): Observable<any>{
  const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
      return this.http.get(this.baseUrl+"/getAll");
  }

  public getProductById(id: any){
  const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
      return this.http.get(this.baseUrl + "/getProduct/" +id);
    }

     public deleteProduct(id: any){
            return this.http.delete(this.baseUrl + "/deleteProduct/" + id, {responseType:'text' as 'json'});
        }
}
