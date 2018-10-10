import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ProductsModule { }
