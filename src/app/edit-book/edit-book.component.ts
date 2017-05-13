import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [BookService]
})
export class EditBookComponent implements OnInit {
  @Input() selectedBook;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  beginUpdatedBook(bookToUpdate) {
    this.bookService.updateBook(bookToUpdate);
  }

  beginDeletingBook(bookToDelete) {
    if(confirm("Are you sure you want to delte this item from the inventory?")) {
      this.bookService.deleteBook(bookToDelete);
    }
  }

}
