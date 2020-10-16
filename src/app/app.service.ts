import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppService {

  private myBooks: any;
  private myBooksUpdated = new Subject<{myBooks}>();

  constructor(private http: HttpClient,private snackBar: MatSnackBar){}

  getEventDetailsTable() {
    this.http.get<{message: string, data: any}>("http://localhost:3000/api/book")
    .pipe(
      map((mybookData) => {
      return {myBooks : mybookData.data.map( mypost => {
        return{
          title: mypost.title,
          author: mypost.author,
          id: mypost._id,
          cost: mypost.cost,
          sales: mypost.sales
        };
      })};
    }))
    .subscribe((transformaedData) => {
      // console.log(transformaedData);
      this.myBooks = transformaedData.myBooks;
      this.myBooksUpdated.next({
        myBooks : [...this.myBooks]
        });
    });
  }

  getMyBookUpdateListenerTable() {

    console.log(this.myBooks);
    return this.myBooks;
  }

  addBook(title: string, author: string,cost: number,sales: number) {
    const BookData = {title, author, cost, sales};
    this.http.post<{message: string, data: any}>("http://localhost:3000/api/book", BookData)
    .subscribe((response) => {
      // console.log(response);
      this.snackBar.open("Book Added", "OK", {panelClass:['success'],verticalPosition: 'bottom',horizontalPosition: 'right'});
    },err => {
      console.log(err);
    })
    // console.log(BookData);
  }

}
