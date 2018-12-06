import { Injectable } from '@angular/core';
import {Product} from './Model/product';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Client } from './Model/client';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  addProductService(newProduct:Product){
    //let httpOptions={headers:''};
    //httpOptions.headers =httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let token =sessionStorage.getItem('access_token');
    console.log("token:",token);
    const options ={ headers: new HttpHeaders().set('Authorization',token)};
    
    return this.http.post("http://localhost:8000/addProduct",{newProduct:newProduct},options);

    
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
