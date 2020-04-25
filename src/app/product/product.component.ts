import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { NotificationService } from '../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NotificationService,ProductService] //local componenta servis implementasyonu için gerekmektedir.
})
export class ProductComponent implements OnInit {

  constructor(private notificationService: NotificationService,
     private productService:ProductService,
     private activatedRoute:ActivatedRoute
     ) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[];
  

  // products: Product[] = [
  //   {
  //     id: 1,
  //     productname: "laptop",
  //     price: 2500,
  //     categoryId: 1,
  //     description: "Hp Laptop",
  //     imageUrl: "https://productimages.hepsiburada.net/s/31/550/10350316191794.jpg/format:webp"

  //   }, {
  //     id: 2,
  //     productname: "mouse",
  //     price: 40,
  //     categoryId: 2,
  //     description: "Microsoft Mouse book",
  //     imageUrl: "https://productimages.hepsiburada.net/s/3/550/9623492132914.jpg/format:webp"

  //   }, {
  //     id: 1,
  //     productname: "laptop",
  //     price: 2500,
  //     categoryId: 1,
  //     description: "Huawei mate book",
  //     imageUrl: "https://productimages.hepsiburada.net/s/32/550/10378640359474.jpg/format:webp"

  //   }, {
  //     id: 2,
  //     productname: "mouse",
  //     price: 40,
  //     categoryId: 2,
  //     description: "Xiaomi",
  //     imageUrl: "https://productimages.hepsiburada.net/s/20/550/9889316405298.jpg/format:webp"

  //   }, {
  //     id: 1,
  //     productname: "laptop",
  //     price: 2500,
  //     categoryId: 1,
  //     description: "Huawei mate book",
  //     imageUrl: "https://productimages.hepsiburada.net/s/32/550/10378640359474.jpg/format:webp"

  //   }, {
  //     id: 2,
  //     productname: "mouse",
  //     price: 40,
  //     categoryId: 2,
  //     description: "Logitech",
  //     imageUrl: "https://productimages.hepsiburada.net/s/7/550/8882971508786.jpg/format:webp"

  //   }]



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.GetProducts(params.categoryId).subscribe(data=>{

        this.products=data;
      });

    });

 
  }

  addToCard(product) {
    this.notificationService.Success(product.productname + " is Added to the Card!")

  }
}
