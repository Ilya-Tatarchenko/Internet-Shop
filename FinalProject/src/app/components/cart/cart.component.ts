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

  constructor(public productService: ProductsService, public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.productService.basketSubject.subscribe(change =>{
      if(change && change.product) {
        this.productsInCard.push('product');  
      }
    })

    this.products = JSON.parse(localStorage.getItem('products'));
  }

}
