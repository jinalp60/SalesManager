import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  newClient:Client=new Client();
  constructor(private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  addClient(){
    console.log("add Client",this.newClient);
    //call service and save this product
    this.adminService.addClientService(this.newClient).subscribe(data=>{
      console.log("success",data);
    },
    error=>{
      console.log("error");
    });
    //resetting the form
    this.newClient=new Client();
  }
}
