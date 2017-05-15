import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../book.model';
import { routing } from '../app.routing';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})

export class BookListComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  filterByGenre: String = "allGenres";
  admin: boolean;

  constructor(private router: Router, private bookService: BookService, private adminService: AdminService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.admin = this.adminService.getAdmin();
    console.log(this.router.url);
  }

  clickDetails(clickedBook) {
    this.router.navigate(['books', clickedBook.$key]);
  }

  onChange(selectGenre) {
    this.filterByGenre = selectGenre;
  }

  clickEdit(book) {
    alert("Oops! Better finish reading.");
    this.router.navigate(['books', book.$key]);
  }

}
