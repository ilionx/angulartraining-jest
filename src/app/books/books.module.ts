import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book/book.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookComponent,
    TesteComponent
  ],
  exports: [
    BookComponent
  ]
})
export class BooksModule { }
