import { CoronaTableComponent } from './corona-table/corona-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/book-list/book-list.component';


const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'addBook', component: BookAddComponent},
  {path: 'list', component: BookListComponent},
  {path: 'corona' , component: CoronaTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
