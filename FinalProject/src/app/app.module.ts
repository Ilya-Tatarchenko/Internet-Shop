import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule} from 'ngx-owl-carousel-o'
import { CarouselCompComponent} from './components/carousel-comp/carousel-comp.component'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppSearchComponent } from './components/header/header-components/app-search/app-search.component';
import { AppInputComponent } from './components/header/header-components/app-search/app-input/app-input.component';
import { AppBtnComponent } from './components/header/header-components/app-search/app-btn/app-btn.component';
import { NavMenuComponent } from './components/header/header-components/nav-menu/nav-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { MainComponent } from './components/main/main.component';
import { ProductByIdComponent } from './components/product/product-by-id/product-by-id.component';
import { ProductByIdInfoComponent } from './components/product/product-by-id/product-by-id-info/product-by-id-info.component';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductComponent,
    FooterComponent,
    AppSearchComponent,
    AppInputComponent,
    AppBtnComponent,
    NavMenuComponent,
    CartComponent,
    LoginComponent,
    ProductCardComponent,
    MainComponent,
    ProductByIdComponent,
    ProductByIdInfoComponent,
    CarouselCompComponent,
    CartItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
