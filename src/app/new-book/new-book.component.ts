import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  providers: [BookService]
})
export class NewBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private bookService: BookService) { }

  ngOnInit() {
  }

  submit(name,favBook, description, genre,location, url){
  var  newBook: Book = new Book (name,favBook, description, genre,location, url);
  this.bookService.addBook(newBook);
  }

}
