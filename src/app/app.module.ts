import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './page/account/login-page/login-page.component';
import { ResetPassowordPageComponent } from './page/account/reset-passoword-page/reset-passoword-page.component';
import { SignupPageComponent } from './page/account/signup-page/signup-page.component';
import { PetsPageComponent } from './page/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './page/store/products-page/products-page.component';
import { CartPageComponent } from './page/store/cart-page/cart-page.component';
import { FramePageComponent } from './page/master/frame.page';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPassowordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
