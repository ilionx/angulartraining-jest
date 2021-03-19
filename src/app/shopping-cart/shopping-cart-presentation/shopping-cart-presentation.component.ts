import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../books/book';
import {Observable} from 'rxjs';

@Component({
  selector: 'ibs-shopping-cart-presentation',
  templateUrl: './shopping-cart-presentation.component.html'
})
export class ShoppingCartPresentationComponent {

  @Input() books: Observable<Book[]> | undefined;
  @Output() clearShoppingCart = new EventEmitter();

}
