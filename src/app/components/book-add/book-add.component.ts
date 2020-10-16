import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  constructor(public appService: AppService) {}
  onSave(form: NgForm){
    if (form.invalid) {
      return;
    }
    // console.log(form.value);
    this.appService.addBook(form.value.title, form.value.author, form.value.cost, form.value.sales);
    form.reset();
  }

}
