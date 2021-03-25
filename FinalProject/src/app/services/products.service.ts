import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse, IGetProductAndCount } from '../interfaces/product';
import { LocalStorageService } from './local-storage.service';




@Injectable({
  providedIn: 'root'
})

export class ProductsService {

//переходы по страницам
pageNumber: number;
value: number;

//счетчик товаров в корзине
count = parseInt(localStorage.getItem('count'), 10) || 0;
cCount: any;

productsInCard: any[] = [];
countByProduct: number;
productAndCount: IGetProductAndCount[];

findProductValue: string;

//subjects
basketSubject = new Subject<any>();
productBasketSubject = new Subject<IProduct>();
searchSubject = new Subject<string>();

//поиск продуктов
searchProduct: string;

index: number;



//products: IGetProductAndCount[] = [];

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

getSearchProducts(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchProduct}`);
}

//Добавление продуктов в корзину
buy(product: IProduct){
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
  //this.products = JSON.parse(localStorage.getItem('products'));
}

searchProductFunction(searchProduct, products: IProduct){
  this.searchProduct = searchProduct.toLowerCase();
  this.searchSubject.next(this.searchProduct);
  
  //alert(searchProduct);
  // return this.getSearchProducts;
}


}
