import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent } from './login-page/login-page.component';
const loginroutes: Routes = [
  {
    path:'signIn',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
