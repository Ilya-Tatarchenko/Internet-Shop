import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetProductResponse, IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class TopProductsService {

  constructor(private http: HttpClient) { }

  getTopProductItem(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://nodejs-final-mysql.herokuapp.com/products/top`);
  }
}
