import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminServiceService } from './admin-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  declarations: [AdminPageComponent, SellProductComponent, AddProductComponent],
  providers:[AdminServiceService]
})
export class AdminModule { }
