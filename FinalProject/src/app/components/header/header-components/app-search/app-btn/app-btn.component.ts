import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {

  @Input('searchProductBtn') searchProduct: string;

  products: IProduct;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  findProduct(){
    // if(this.searchProduct === undefined) this.searchProduct = '';
    //alert(this.searchProduct);
    this.productsService.searchProductFunction(this.searchProduct, this.products);
  }

}
