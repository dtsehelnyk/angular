import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../services/todo-service.service';
// import { TodosService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss'],
})
export class TodoCreatorComponent {

  constructor(private todoService: TodoService) { }
  
  // @@ form builder
  handleAddTodo(myForm: NgForm) {
    this.todoService.addTodo({
      name: myForm.value.todoTitle,
      description: myForm.value.todoDescription,
      isCompleted: false,
      id: new Date().toString(),
    });

    myForm.reset();
  }
}
