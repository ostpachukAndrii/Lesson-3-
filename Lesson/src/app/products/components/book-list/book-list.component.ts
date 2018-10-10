import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

   public books: Array<BookModel>;

  constructor()   {
    this.books = [new BookModel(1, 'Book 1', 10, 'img'),
    new BookModel(2, 'Book 2', 20, 'img'),
    new BookModel(3, 'Book 3', 30, 'img')];
  }

  ngOnInit() {
  }

}
