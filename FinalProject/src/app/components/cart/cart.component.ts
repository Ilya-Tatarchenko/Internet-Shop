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

  constructor(public productService: ProductsService, public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.productService.basketSubject.subscribe(cart => {
      if (cart?.length > 0) {
        cart.forEach(item => {
          console.log(item)
          this.totalPrice += item.products.price * item.count;
          this.totalCount += item.count;
        });
        this.totalPrice = +this.totalPrice.toFixed(2);
      }
    })
    this.products = JSON.parse(localStorage.getItem('products'));
  }

}
