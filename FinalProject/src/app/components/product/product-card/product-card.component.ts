import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  items: any[] = [];
  id: string;

  @Input('item') item: IProduct;
  
  constructor(public productService: ProductsService, public http: HttpClient, public router: Router) {

  }

  ngOnInit(): void {
    
  }

  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }

}
