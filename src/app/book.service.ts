import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;
  currentBook: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.books = database.list('books');
  }

  getBooks() {
    return this.books;
  }

  getBookById(bookId: string) {
    return this.database.object('books/' + bookId);
  }


  addBook(newBook: Book) {
    this.books.push(newBook);
  }


  updateBook(localUpdatedBook) {
  var bookEntryInFirebase =
  this.getBookById(localUpdatedBook.$key);
  bookEntryInFirebase.update({favBook: localUpdatedBook.favBook, location: localUpdatedBook.location, description: localUpdatedBook.description});
  }

  deleteBook(localBookToDelete) {
  var bookEntryInFirebase = this.getBookById(localBookToDelete.$key);
  bookEntryInFirebase.remove();
  }

}
