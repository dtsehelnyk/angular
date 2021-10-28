import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TodoService } from '../services/todo-service.service';
import { Todo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  // providers: [TodoService],
})
export class TodoListComponent implements OnInit, OnChanges {
  isReverseDirection: boolean = false;

  todosList$ = new Observable<Todo[]>();

  constructor(private todoService: TodoService){}

  handleChangeDirection() {    
    this.isReverseDirection = !this.isReverseDirection;
    this.handleUpdateTodos();
  }

  handleDeleteAll() {
    this.todoService.deleteAll();
    this.handleUpdateTodos();
  }

  handleUpdateTodos() {
    // this.todosList = this.isReverseDirection
      // ? this.todoService.getTodos().reverse()
      // : this.todoService.getTodos();
    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todosList = todos;
    // });

    // console.log('????todosList', this.todosList);
  }

  ngOnInit(): void {
    // @@ observer
    // this.todosList = this.todoService.todos;

    // this.handleUpdateTodos();

    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todosList = todos;
    //   console.log(999);
    // });

    this.todosList$ = this.todoService.todos$;

    console.log(123);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('??rerendred');
  }
}
