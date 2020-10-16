import { MatTableDataSource } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-table',
  templateUrl: './corona-table.component.html',
  styleUrls: ['./corona-table.component.css']
})
export class CoronaTableComponent implements OnInit {

  private coronadetails: any;
  displayedColumns: string[] = ['Country',  'CountryCode' , 'Slug', 'NewConfirmed','NewDeaths',  'TotalDeaths' , 'NewRecovered', 'TotalRecovered', 'Date'];
  private dataSource: any;
  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getCorornaDetails().subscribe(result => {
      this.coronadetails = result;
      console.log(result);
      this.dataSource = new MatTableDataSource(this.coronadetails.Countries);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

