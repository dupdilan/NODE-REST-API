import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppService {


  constructor(private http: HttpClient,private snackBar: MatSnackBar,private router: Router){}

  getEventDetailsTable() {
    return this.http.get("http://localhost:3000/api/book");
  }



  addBook(title: string, author: string,cost: number,sales: number) {
    const BookData = {title, author, cost, sales};
    this.http.post<{message: string, data: any}>("http://localhost:3000/api/book", BookData)
    .subscribe((response) => {
      // console.log(response);
      this.snackBar.open("Book Added", "OK", {panelClass:['success'],verticalPosition: 'bottom',horizontalPosition: 'center'});
      this.router.navigate(['/list']);
    },err => {
      console.log(err);
    })
    // console.log(BookData);
  }

}
