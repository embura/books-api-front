import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' 

import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
