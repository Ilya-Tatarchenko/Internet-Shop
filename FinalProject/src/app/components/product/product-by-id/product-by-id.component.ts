//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent implements OnInit {

  product = {} as IProduct;

  constructor() { }

  ngOnInit(): void {
    
  }

}
