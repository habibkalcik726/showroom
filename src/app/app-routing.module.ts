import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormAddNewproductComponent } from './product/form-add-newproduct/form-add-newproduct.component';
import { ReactiveFormComponent } from './product/reactive-form/reactive-form.component';


const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "form-add-new-product", component: FormAddNewproductComponent },
  { path: "reactive-form-add-new-product", component: ReactiveFormComponent },

  { path: '', redirectTo: 'products', pathMatch: 'full' },
 {path:'category/:categoryId',component:ProductComponent} //form-add-newproduct
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
