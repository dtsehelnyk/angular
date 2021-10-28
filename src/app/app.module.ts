import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardCompnent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCompnent,
    TodoListComponent,
    TodoCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // export: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
