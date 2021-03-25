import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input('product') product: IProduct;

  constructor() { }

  selectedCount = 1;
  counts: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= this.product.countInStock; i++) {
      this.counts.push(i);
    }
  }

}
