import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin/admin-routing.module';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    HomeModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
