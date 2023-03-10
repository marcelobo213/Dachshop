import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPassowordPageComponent } from './reset-passoword-page/reset-passoword-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PetsPageComponent } from './pets-page/pets-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPassowordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
