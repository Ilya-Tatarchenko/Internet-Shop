import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit {

  value: number;
  
  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    
  }

  pageNumber(value){
    // this.pageNumber = value;
    this.productService.goToPage(value);
  }

}
