import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TopProductsService } from 'src/app/services/top-products.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-carousel-comp',
  templateUrl: './carousel-comp.component.html',
  styleUrls: ['./carousel-comp.component.scss']
})
export class CarouselCompComponent implements OnInit {

  items: any[] = [];

  constructor(public http: HttpClient, public router: Router, public topProductService: TopProductsService) {
  }

  slidesStore = [
    {
      id: 1,
      title: 'Some',
      src: 'https://nodejs-final-mysql.herokuapp.com/images/apple_watch.jpg',
      name: 'Apple Watch Series 6',
      alt: 'some'
    },
    {
      id: 2,
      title: 'Some',
      src: 'https://nodejs-final-mysql.herokuapp.com/images/apple-airpods.jpg',
      name: 'Apple AirPods Max - Space Gray',
      alt: 'some'
    },
    {
      id: 3,
      title: 'Some',
      src: 'https://nodejs-final-mysql.herokuapp.com/images/canon.jpg',
      name: 'Canon EOS 250D kit 18-55 IS STM Black',
      alt: 'some'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    rewind: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,

  };

  ngOnInit(): void {
    this.topProductService.getTopProductItem()
      .subscribe((res: IProduct[]) => {
        console.log(res);
        this.items = res;
      });
  }

}
