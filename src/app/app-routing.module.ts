import { ResetPassowordPageComponent } from './page/account/reset-passoword-page/reset-passoword-page.component';
import { SignupPageComponent } from './page/account/signup-page/signup-page.component';
import { PetsPageComponent } from './page/account/pets-page/pets-page.component';
import { CartPageComponent } from './page/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './page/store/products-page/products-page.component';
import { FramePageComponent } from './page/master/frame.page';
import { LoginPageComponent } from './page/account/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: CartPageComponent }
    ]
  },
  {
    path: "account",
    component: FramePageComponent,
    children: [
      { path: 'pets', component: PetsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPassowordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
