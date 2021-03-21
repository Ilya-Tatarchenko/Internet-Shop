import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {

  //@Input('product') product: IProduct;
  
  searchProduct: string;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
