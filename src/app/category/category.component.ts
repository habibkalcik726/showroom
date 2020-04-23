import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title= "CategoryList";
  categories: Category[] = [
    {
      id: 1,
      categoryName: "Elektronic"

    },
    {
      id: 2,
      categoryName: "Music"

    }, {
      id: 3,
      categoryName: "Game"

    }, {
      id: 4,
      categoryName: "Vehicle"

    }

  ]
  ngOnInit(): void {
  }

}
