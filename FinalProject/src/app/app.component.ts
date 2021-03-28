import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'finish';

  constructor(public productsService: ProductsService) {
  }
  
  ngOnInit() {
    let products = JSON.parse(localStorage.getItem('products'));
    if(!products || !products.length) {
      localStorage.setItem('products', JSON.stringify([]));
    }

    this.productsService.basketSubject.next(products);
  }
}


