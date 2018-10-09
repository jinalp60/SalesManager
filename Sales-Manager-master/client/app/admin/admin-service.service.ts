import { Injectable } from '@angular/core';
import {Product} from './Model/product';
import { HttpClient } from '@angular/common/http';
import { Client } from './Model/client';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  addProductService(newProduct:Product){
    return this.http.post("http://localhost:8000/addProduct",newProduct);

    
  }
  addClientService(newClient:Client){
   // console.log("service client",newClient);
    return this.http.post("http://localhost:8000/addClient",newClient);

    
  }
  sellProductService(phoneNo,productName,quantity,sellingPrice,moneyPaid){
   // console.log("service client",newClient);
    return this.http.post("http://localhost:8000/sellProduct",{phoneNo:phoneNo,productName:productName,quantity:quantity,sellingPrice:sellingPrice,moneyPaid:moneyPaid});
  }
  fetchProductDetailsService(){
    return this.http.get("http://localhost:8000/fetchProductDetails");
  }
}
