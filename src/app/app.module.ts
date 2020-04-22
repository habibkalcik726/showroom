import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { NotificationService } from './services/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//NotificationService: servisin global olması için providersin içine
                                   // alınması yada servisin tanımlandığı yerde ProviderIn:root şeklinde tanımlanması gerekmektedir.
  bootstrap: [AppComponent]
})
export class AppModule { }
