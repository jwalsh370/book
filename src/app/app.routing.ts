import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent} from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BookListComponent
  }, {
    path: 'books/:id',
    component: BookDetailComponent
  }, {
    path: 'new',
    component: NewBookComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
