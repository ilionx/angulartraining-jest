import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartContainerComponent} from './shopping-cart-container/shopping-cart-container.component';
import {ShoppingCartPresentationComponent} from './shopping-cart-presentation/shopping-cart-presentation.component';
import {ShoppingCartService} from './shopping-cart.service';
import {BooksModule} from '../books/books.module';

@NgModule({
  imports: [
    BooksModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ShoppingCartContainerComponent,
    ShoppingCartPresentationComponent
  ],
  exports: [
    ShoppingCartContainerComponent
  ],
  providers: [
    ShoppingCartService
  ]
})
export class ShoppingCartModule {
}
