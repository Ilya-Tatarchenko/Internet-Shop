import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductsService } from 'src/app/services/products.service';
import { IGetProductAndCount} from 'src/app/interfaces/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: IGetProductAndCount[] = [];

  productsInCard: any[] = [];

  totalCount: number = 0;
  totalPrice: number = 0;

  a: number;
  cart: any;
  val: number;
  itemCount: number;
  
  constructor(public productService: ProductsService, public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = Number(totalCount);
    this.totalPrice = Number(totalPrice);
    this.totalPrice.toFixed(2);
  }


  countInCart(value: number){
    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = +totalCount;
    this.totalPrice = +totalPrice;
  }

}
