import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  id: string;

  products: IProduct[] = [];
  dublicate: any[] = [];
  i: number;

  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit(): void {
    this.productsService.getSearchProducts()

      .subscribe((res: IGetProductResponse) => {

        this.products = res.products;
      });
      
    }

}
