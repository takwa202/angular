import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    NotfoundComponent,
    AddproductComponent,
    ProductdetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
