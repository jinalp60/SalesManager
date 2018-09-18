import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home/home-page/home-page.component';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {LoginModule } from './login/login.module';
import {HomeModule} from './home/home.module';
const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {path:'home',component:HomePageComponent},
  {path:'signIn',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }