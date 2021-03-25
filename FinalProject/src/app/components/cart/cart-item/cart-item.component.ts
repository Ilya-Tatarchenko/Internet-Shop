import { Component, Input, OnInit, } from '@angular/core';
import { IGetProductAndCount, IProduct } from 'src/app/interfaces/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('item') item: IGetProductAndCount;
  @Input('i') i: number;
  
  productID: any;


  constructor(public cartComponent: CartComponent, public localStorageService: LocalStorageService, public productsService: ProductsService) { }

  ngOnInit(): void {
    
  }

  deleteBasketItem(i: number){
    this.i = i;
    this.productsService.removeFromLocalstorage(i);
  }


}
