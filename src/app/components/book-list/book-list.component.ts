import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  private books: any;
  displayedColumns: string[] = ['title',  'description' , 'start', 'end', 'startAssign', 'endAssign', 'PostedDate'];
  private dataSource: any;
  private myeventsSub: Subscription;
  constructor(public appService: AppService) {}

  ngOnInit() {

    this.books  = this.appService.getEventDetailsTable();
    console.log(this.books);
    this.dataSource = new MatTableDataSource(this.books);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
