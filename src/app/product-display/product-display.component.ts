import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  private products: Object[] = [
    {
      "type": "phone", "brand": "Samsung",
      "name": "Galaxy Edge S7",
      "popularity": 4, "price": 700,
      "picture": "galaxyS7edge.jpeg",
      "stock": 150
    },
    {
      "type": "phone", "brand": "Apple",
      "name": "iPhone 7 32G",
      "popularity": 4, "price": 900,
      "picture": "iphone7.jpeg", "stock": 80
    },
    {
      "type": "phone", "brand": "Apple",
      "name": "iPhone 7 256G",
      "popularity": 4, "price": 1300,
      "picture": "iphone7.jpeg",
      "stock": 100
    },
    {
      "type": "phone", "brand": "Nokia",
      "name": "3310",
      "price": 200,
      "picture": "nokia3310.jpeg", "stock": 0
    }];

  constructor() { }

  ngOnInit() {
  }

}
