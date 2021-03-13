import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  count: number = 0;
  value: number;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.basketSubject.subscribe(product =>{
      if(product)
      {
        this.count++;
      }
    })
  }

}
