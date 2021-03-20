import { Component, OnInit } from '@angular/core';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit {

  value: number;
  products: any[] = [];
  
  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProductItem()
      .subscribe((res: IGetProductResponse) => {
        this.products = res.products;
      });
  }

  pageNumber(value){
    // this.pageNumber = value;
    this.productService.goToPage(value).subscribe((newProducts:IGetProductResponse) => {
      this.products = newProducts.products;
    });
  }

}
