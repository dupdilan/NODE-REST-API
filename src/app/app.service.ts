import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppService {

  private myBooks: any;
  private myBooksUpdated = new Subject<{myBooks}>();

  constructor(private http: HttpClient){}

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
      // console.log(transformaedpostData);
      this.myBooks = transformaedData.myBooks;
      this.myBooksUpdated.next({
        myBooks : [...this.myBooks]
        });
    });
  }

}
