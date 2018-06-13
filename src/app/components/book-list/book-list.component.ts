import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BookService} from "./../../services/book.service";
import { BookComponent } from '../book/book.component';
 
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
  
})
export class BookListComponent implements OnInit {
  books:Object;
  constructor(private bookService:BookService, private httpClient:HttpClient) { }

  async ngOnInit() {
    await this.getBooks();
  }
  
  //onNameKeyUp(event:any){}

  async getBooks(){
    this.httpClient.get(`http://localhost:3000/books`)
    .subscribe( (data:any[]) => {
      this.books = data;
    });
  }

}
