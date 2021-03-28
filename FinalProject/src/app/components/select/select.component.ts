import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IGetProductAndCount, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(public productService: ProductsService, public http: HttpClient) { }

  selectedCount: number;
  counts: number[] = [];
  value: number;

  @Input('product') product: IGetProductAndCount;
  @Output() sendSelectedCount = new EventEmitter<number>(); // !

  ngOnInit(): void {
    this.selectedCount = this.product.count;

    for (let i = 1; i <= this.product.products.countInStock; i++) {
      this.counts.push(i);
    }
  }

  send(value: number) {
    this.product.count = +this.selectedCount;
    console.log(this.selectedCount);
  }

}
