import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse, IGetProductAndCount } from '../interfaces/product';
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
countByProduct: number;
productAndCount: IGetProductAndCount[];

findProductValue: string;

basketSubject = new Subject<any>();
productBasketSubject = new Subject<IProduct>();

searchProduct: string;

constructor(private http: HttpClient, public localStorageService: LocalStorageService) {

}


//Переходы по страницам
goToPage(value) {
  this.pageNumber = value;  
  return this.getProductItem();
}

getProductItem(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
}

//Добавление продуктов в корзину
buy(product: IProduct){

  if(product)
  {
    this.count++;
    localStorage.setItem('count', this.count.toString());

    this.cCount = localStorage.getItem('count');
  }

  this.basketSubject.next({ product, count: this.count }); 
}

buyProductAndCount(productAndCount: IGetProductAndCount){
  if (productAndCount.products) {
    this.count++;
    localStorage.setItem('count', this.count.toString());
    this.cCount = localStorage.getItem('count');
  }
  this.basketSubject.next({products: productAndCount.products, count: this.count});


  this.productAndCount = JSON.parse(localStorage.getItem('products'));
  this.productAndCount.push({products: productAndCount.products, count: Number(productAndCount.count)});
  localStorage.setItem('products', JSON.stringify(this.productAndCount));
}

searchProductFunction(searchProduct, products: IProduct){
  this.searchProduct = searchProduct;
  alert(searchProduct);
}

}
