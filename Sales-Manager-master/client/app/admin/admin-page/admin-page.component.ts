import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
  }
  signOut(): void {
    this.loginService.signOut();
  }
}
