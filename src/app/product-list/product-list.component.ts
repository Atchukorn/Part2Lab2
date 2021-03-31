import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  arrayProducts: Product[];

  constructor() {
    this.arrayProducts = [];
    this.arrayProducts.push({
      name: 'ส้มโอ',
      price: 990
      });
    this.arrayProducts.push({
      name: 'แตงโม',
      price: 1000
      });
    this.arrayProducts.push({
      name: 'มะพร้าวน้ำหอม',
      price: 500
      });

  }

  ngOnInit(): void {
  }

}
