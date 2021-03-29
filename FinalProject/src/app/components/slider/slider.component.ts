import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { TopProductsService } from 'src/app/services/top-products.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})



export class SliderComponent implements OnInit {

  items: IProduct[] = [];


  constructor(public http: HttpClient, public router: Router, public topProductService: TopProductsService) { }
  
  // homeSlider = {items : 1, dots: true, nav: false, loop: true};
  
  ngOnInit(): void {
    this.topProductService.getTopProductItem()
      .subscribe((res: IProduct[]) => {
        console.log(res);
        this.items = res;
      });

      $('.carousel').carousel({
        interval: 5000
      })
  }

  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }

  
  
}
