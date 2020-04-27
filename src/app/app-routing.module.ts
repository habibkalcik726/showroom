import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormAddNewproductComponent } from './product/form-add-newproduct/form-add-newproduct.component';
import { ReactiveFormComponent } from './product/reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "login", component: LoginComponent },
  { path: "form-add-new-product", component: FormAddNewproductComponent, canActivate:[LoginGuard]},
  { path: "reactive-form-add-new-product", component: ReactiveFormComponent },

  { path: '', redirectTo: 'products', pathMatch: 'full' },
 {path:'category/:categoryId',component:ProductComponent} //form-add-newproduct
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
