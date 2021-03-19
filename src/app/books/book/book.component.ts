import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'ibs-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  @Input() book: Book | undefined;

}
