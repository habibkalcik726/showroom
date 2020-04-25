import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { NotificationService } from 'src/app/services/notification.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/Category/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [ProductService]
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private categoryService: CategoryService,
    private productService: ProductService) {


  }
  addProductForm: FormGroup;
  productModel: Product = new Product();
  categories: Category[];
  CreateProductForm() {
    this.addProductForm = this.formBuilder.group({
      productname: ["", Validators.required],
      price: ["", Validators.required],
      imageUrl: ["", Validators.required],
      description: ["", Validators.required],
      categoryId: ["", Validators.required],

    });

  }

  CreateProduct() {


    if (this.addProductForm.valid) {
      this.productModel = Object.assign({}, this.addProductForm.value);

      this.productService.AddProduct(this.productModel).subscribe(data => {

        this.notificationService.Success(data.productname + " is Succesfully Created.");
      });
    }
    else
      this.notificationService.Success("Error");

  }
  ngOnInit(): void {

    this.CreateProductForm();
    this.categoryService.GetCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
