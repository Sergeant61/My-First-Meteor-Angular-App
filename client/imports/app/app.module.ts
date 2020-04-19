import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'todoList',
        component: TodoListComponent
      },
      {
        path: 'todoAdd',
        component: TodoAddComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/todoList',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
