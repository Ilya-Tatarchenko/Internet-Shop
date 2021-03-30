import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-by-id-review',
  templateUrl: './product-by-id-review.component.html',
  styleUrls: ['./product-by-id-review.component.scss']
})
export class ProductByIdReviewComponent implements OnInit {

  @Input('product') product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
