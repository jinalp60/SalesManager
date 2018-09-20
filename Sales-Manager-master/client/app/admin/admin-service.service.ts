import { Injectable } from '@angular/core';
import {Product} from './Model/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  addProductService(newProduct:Product){
    return this.http.post("http://localhost:8000/addProduct",newProduct);

    
  }
}
