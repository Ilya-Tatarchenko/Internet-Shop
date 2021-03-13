import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse } from '../interfaces/product';




@Injectable({
  providedIn: 'root'
})

export class ProductsService {

basketSubject = new Subject<IProduct>();

constructor(private http: HttpClient) {

}

getProductItem(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>('https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=1')
}

buy(product: IProduct){
  this.basketSubject.next(product);
}

}
