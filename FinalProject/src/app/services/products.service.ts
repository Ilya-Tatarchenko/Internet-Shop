import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse } from '../interfaces/product';
import { LocalStorageService } from './local-storage.service';




@Injectable({
  providedIn: 'root'
})

export class ProductsService {

pageNumber: number;
value: number;


count = parseInt(localStorage.getItem('count'), 10) || 0;
cCount: any;

productsInCard: any[] = [];



basketSubject = new Subject<any>();

constructor(private http: HttpClient, public localStorageService: LocalStorageService) {

}

goToPage(value){
  this.pageNumber = value;
  console.log(this.pageNumber);

  return this.pageNumber;
}

getProductItem(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
}

buy(product: IProduct){

  if(product)
  {
    this.count++;
    localStorage.setItem('count', this.count.toString());

    this.cCount = localStorage.getItem('count');
  }

  let ps = JSON.parse(localStorage.getItem('product'));
  //ps.push(this.productsInCard);
  localStorage.setItem('product', ps);

  this.basketSubject.next({product, count: this.count});
}


}
