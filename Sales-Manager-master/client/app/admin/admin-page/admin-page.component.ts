import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  showAddProduct: Boolean=false;
  showSellProduct: Boolean=false;

  constructor(private loginService:LoginServiceService) { }
 
  ngOnInit() {
    this.dropdownSideBar();
    
  }
  callShowAddProduct(){
    this.showAddProduct=true;
    this.showSellProduct=false;
  }
  callShowSellProduct(){
    this.showSellProduct=true;
    this.showAddProduct=false;
  }
  dropdownSideBar(){
    var dropdown=$('.dropdown-btn');
    //var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  signOut(): void {
    this.loginService.signOut();
  }
}
