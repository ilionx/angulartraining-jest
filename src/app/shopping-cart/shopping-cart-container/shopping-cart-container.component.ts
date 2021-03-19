import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {Observable} from 'rxjs';
import {Book} from '../../books/book';

@Component({
  selector: 'ibs-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html'
})
export class ShoppingCartContainerComponent implements OnInit {

  books: Observable<Book[]> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.books = this.shoppingCartService.getShoppingCart();
  }
}
