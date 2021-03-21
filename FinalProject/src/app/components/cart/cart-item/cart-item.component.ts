import { Component, OnInit } from '@angular/core';
import { IGetProductAndCount, IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  //@Input('item') item: IProduct;

  products: IGetProductAndCount[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
    console.log(this.products);
  }

}
