import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { HomePageComponent } from './home/home-page/home-page.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AdminRoutingModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
