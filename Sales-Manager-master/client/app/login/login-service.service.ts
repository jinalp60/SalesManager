import { Injectable } from '@angular/core';

import {AuthService, GoogleLoginProvider, FacebookLoginProvider} from 'angular4-social-login';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  signInVarResult=false;
  user: any;
  constructor(private authService: AuthService,private router: Router) { }

  signInGoogleService(){
    console.log("google service called");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
    this.authService.authState.subscribe((user) => {
      this.user=user;
      this.signInVarResult=(this.user != null);
      console.log("UserData:",this.user);
      
      if(this.signInVarResult){
        console.log("navigated");
        this.router.navigate(['/admin']);
      }
    });
    
  }
  signInFacebookService(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user=user;
      this.signInVarResult=(this.user != null);
      console.log("UserData:",this.user);
      
      if(this.signInVarResult){
        this.router.navigate(['/admin']);
      }
      
    });
  }
  signOut(){
    this.user=null;
    console.log("print",this.user);
    this.authService.signOut();
  }
}
