import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [NotificationService]
})
export class CategoryComponent implements OnInit {

  constructor(private notificationService: NotificationService, private categoryService: CategoryService) { }
  title = "Category List";
  categories: Category[];
  // categories: Category[] = [
  //   {
  //     id: 1,
  //     categoryName: "Elektronic"

  //   },
  //   {
  //     id: 2,
  //     categoryName: "Music"

  //   }, {
  //     id: 3,
  //     categoryName: "Game"

  //   }, {
  //     id: 4,
  //     categoryName: "Vehicle"

  //   }

  // ]
  ngOnInit(): void {
    this.categoryService.GetCategories().subscribe(data => {
      this.categories = data;

    });

  }

}
