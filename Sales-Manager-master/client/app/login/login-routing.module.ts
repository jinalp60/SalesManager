import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent } from './login-page/login-page.component';
import { LoginUserInputComponent } from './login-user-input/login-user-input.component';
import { AdminPageComponent } from '../admin/admin-page/admin-page.component';
import {AuthGuard } from '../auth.guard';
const loginroutes: Routes = [
  {
    path:'signIn',
    component:LoginPageComponent
  },
  {
    path:'login',
    component:LoginUserInputComponent
  },
  {
    path:'admin',
    component:AdminPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
