import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/Category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-form-add-newproduct',
  templateUrl: './form-add-newproduct.component.html',
  styleUrls: ['./form-add-newproduct.component.css'],
  providers: [ProductService]
})
export class FormAddNewproductComponent implements OnInit {

  constructor(private categoryService: CategoryService, private notificationService: NotificationService, private productservice: ProductService) { }
  model: Product = new Product();
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.GetCategories().subscribe(data => {
      this.categories = data;

    });

  }
  CreateProduct(addProductForm: NgForm) {

    this.productservice.AddProduct(this.model).subscribe(data => {

      this.notificationService.Success(data.productname + " is Succesfully Created.");
    });
  }


}
