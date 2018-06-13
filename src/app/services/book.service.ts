import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  books:any[] = [
    {
      id: "1",
      name: "Universo sem fronteiras: Bussola de ouro",
      descrption: "sdfs sdfsd fs dfsd",
      createdAt: "2014-11-01 10:10:10",
      updatedAt: "2014-11-01 10:10:10"
      },
      {
      id: "2",
      name: "Millennium:Homens que odiavam as mulheres",
      descrption: "sdfs sdfsd fs dfsd",
      createdAt: "2014-11-01 10:10:10",
      updatedAt: "2014-11-01 10:10:10"
      }
  ]

  getLastBooks(){
    return this.books.length > 0 ? this.books[this.books.length -1]:0;
  }
}
