import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from 'src/shared/introTodos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodosService],
})
export class TodoListComponent implements OnInit, OnChanges {
  isReverseDirection: boolean = false;
  todosList: Todo[] = this.todosService.getTodos();

  constructor(private todosService: TodosService){}

  handleChangeDirection() {    
    this.isReverseDirection = !this.isReverseDirection;
    this.handleUpdateTodos();
  }

  handleDeleteAll() {
    this.todosService.deleteAll();
  }

  handleUpdateTodos() {
    this.todosList = this.isReverseDirection 
      ? this.todosService.getTodos().reverse()
      : this.todosService.getTodos();
  }

  handleShowCount() {
    console.log('??this.todosService.count: ', this.todosService.getCount());
  }

  ngOnInit(): void {    
    this.handleUpdateTodos();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('??rerendred');
  }
}
