import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/shared/introTodos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss'],
  providers: [TodosService],
})
export class TodoCreatorComponent {

  constructor(private todosService: TodosService) { }
  
  handleAddTodo(myForm: NgForm) {
    this.todosService.addTodo({
      name: myForm.value.todoTitle,
      description: myForm.value.todoDescription,
      isDone: false,
    });
  }

  handleCountIncrease() {
    // this.todosService.count += 1;
    this.todosService.setCount();
    console.log('??this.todosService.count: ', this.todosService.count);
  }
}
