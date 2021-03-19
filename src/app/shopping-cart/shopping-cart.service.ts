import {Injectable} from '@angular/core';
import {Book} from '../books/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class ShoppingCartService {

  books: Book[] = [];

  constructor(private httpClient: HttpClient) {
  }

  totalAmount(): number | undefined {
    return undefined;
  }

  getShoppingCart(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>('/shopping-cart')
      .pipe(
        tap(books => this.books = books)
      );
  }
}
