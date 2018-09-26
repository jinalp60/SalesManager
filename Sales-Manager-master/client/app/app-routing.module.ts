import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';
import { CheckAuthComponent } from './check-auth/check-auth.component';
const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
        
    },
    {
        path:'home',component:HomePageComponent
    },
    {
        path:'signIn',component:LoginPageComponent
    },
    {
        path:'admin',component:AdminPageComponent,canActivate: [AuthGuard]
    },
    {
        path:'check',component:CheckAuthComponent,canActivate: [AuthGuard]
    }
    
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }