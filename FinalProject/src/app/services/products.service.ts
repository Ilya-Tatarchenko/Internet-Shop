import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
basketSubject = new BehaviorSubject<any>(null);
productBasketSubject = new Subject<IProduct>();
searchSubject = new Subject<string>();

//поиск продуктов
searchProduct: string;

index: number;
i: number;

//products: IGetProductAndCount[] = [];

constructor(private http: HttpClient, public localStorageService: LocalStorageService) {

}


//Переходы по страницам
goToPage(value) {
  this.pageNumber = value;  
  return this.getProductItem();
}




//Получение продуктов
getProductItem(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
}

getSearchProducts(): Observable<IGetProductResponse> {
  return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchProduct}`);
}







//Добавление продуктов в корзину
buyProductAndCount(productAndCount: IGetProductAndCount): void{

  this.count += productAndCount.count;
  localStorage.setItem('count', this.count.toString());
  this.cCount = +localStorage.getItem('count');
  

  // Хранение товаров с корзины локально
  // Если есть товары, то их сохранять
  // В ином случае создавать пустой массив

  if (JSON.parse(localStorage.getItem('products'))?.length >= 0) {
    this.productAndCount = JSON.parse(localStorage.getItem('products'));
  } 
  else {
    this.productAndCount = [];
  }

  // !console.log(productAndCount);
  // Если данный товар есть в корзине, то повышаем эго каунт в попереднем элементе масссива
  const candidate = this.productAndCount.find(product => product.products._id === productAndCount.products._id)


  if (candidate) {
    candidate.count += productAndCount.count;
  } 
  else {
    this.productAndCount.push({ products: productAndCount.products, count: +productAndCount.count });
  }


  // Передаем обьект в карт компоненту
  this.basketSubject.next(this.productAndCount);
  localStorage.setItem('products', JSON.stringify(this.productAndCount));
}







//Поиск продуктов
searchProductFunction(searchProduct, products: IProduct){
  this.searchProduct = searchProduct.toLowerCase();
  this.searchSubject.next(this.searchProduct);
}






//Удаление из корзины
removeFromLocalstorage(i: number){
  this.i = i;

  this.productAndCount = JSON.parse(localStorage.getItem('products'));
  const index = this.productAndCount[i].count;
  this.productAndCount.splice(i, 1);
  localStorage.setItem('products', JSON.stringify(this.productAndCount));

  // Удаляем с корзины к-во удалённого товара
  this.count -= index;
  localStorage.setItem('count', this.count.toString());
  this.cCount = +localStorage.getItem('count');
}


}
