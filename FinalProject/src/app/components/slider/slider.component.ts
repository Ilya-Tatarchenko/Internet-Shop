import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  items: any[] = [];

  constructor(public productService: ProductsService, public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
  }

  homeSlider = {items : 1, dots: true, nav: false, loop: true};
}
