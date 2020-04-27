import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { NotificationService } from './services/notification.service';
import { FormAddNewproductComponent } from './product/form-add-newproduct/form-add-newproduct.component';
import { ReactiveFormComponent } from './product/reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe,
    FormAddNewproductComponent,
    ReactiveFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService],//NotificationService: servisin global olması için providersin içine
  // alınması yada servisin tanımlandığı yerde ProviderIn:root şeklinde tanımlanması gerekmektedir.
  bootstrap: [AppComponent]
})
export class AppModule { }
