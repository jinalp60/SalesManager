import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { FormBuilder } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct:Product=new Product();
  constructor(private fb: FormBuilder,private adminService: AdminServiceService) { }
  
  ngOnInit() {

  }
  
  addProduct(){
    console.log(this.newProduct);
    //call service and save this product
    this.adminService.addProductService(this.newProduct).subscribe(data=>{
      console.log("success",data);
    },
    error=>{
      console.log("error");
    });
    this.newProduct=new Product();
  }

}
