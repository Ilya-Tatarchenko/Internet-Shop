import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetProductAndCount, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-by-id-info',
  templateUrl: './product-by-id-info.component.html',
  styleUrls: ['./product-by-id-info.component.scss']
})
export class ProductByIdInfoComponent implements OnInit {

  id: string;
  product: any;
  selectedCount: number = 1;
  counts: number[] = [];

  constructor(private activateRoute: ActivatedRoute, public http: HttpClient, public productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    
    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
      for (let i = 1; i <= this.product.countInStock; i++) {
        this.counts.push(i);
      }

      this.product = Object.assign({}, {
        products: this.product,
        count: this.selectedCount
      })
      console.log(this.product);
    });
  }

  buyProduct(product: IGetProductAndCount): void{
    this.productService.buyProductAndCount(product);
    this.takeSelectedCount(this.selectedCount);
  }

  takeSelectedCount(value: number) {
    this.product.count = +value;
    // this.selectedCount = +value;
    //console.log(`take ${this.selectedCount}`);
  }

}
