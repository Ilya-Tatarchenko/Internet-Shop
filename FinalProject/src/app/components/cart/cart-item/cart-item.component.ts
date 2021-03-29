import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { IGetProductAndCount, IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  //@Input('item') item: IGetProductAndCount;
  @Input('i') i: number;

  @Output() newCount = new EventEmitter<number>();
  
  productID: any;
  newSelectCount: number;

  products: IGetProductAndCount[] = [];
  res: any;

  //@Input('products') products: IGetProductAndCount;

  constructor(public cartComponent: CartComponent, public localStorageService: LocalStorageService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  deleteBasketItem(i: number){
    this.i = i;
    this.productsService.removeFromLocalstorage(i);
    this.products = JSON.parse(localStorage.getItem('products'));
  }


  selectToCartItem(value: number) {
    this.newSelectCount = value;
    this.newCount.emit(this.newSelectCount);
    // alert(`Success ${this.newCount}`);
  }

}
