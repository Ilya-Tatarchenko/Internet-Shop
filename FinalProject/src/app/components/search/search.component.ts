import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchProduct: string;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
