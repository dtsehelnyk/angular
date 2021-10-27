import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {
  isReverseDirection: boolean = false;
  todos: Todo[] = [
    {name: 'name 1', decription: 'desc', isDone: false},
    {name: 'name 2', decription: 'desc', isDone: false},
    {name: 'name 3', decription: 'desc', isDone: false},
    {name: 'name 4', decription: 'desc', isDone: false},
  ]

  // constructor(todos: Todo[]) {}

  getList() {
    return this.isReverseDirection ? this.todos.reverse() : this.todos;
  }

  handleChangeDirection() {
    console.log('??111');
    
    this.isReverseDirection = !this.isReverseDirection;
    console.log('??this.isReverseDirection', this.isReverseDirection);
    
  }

  handleAddListItem() {
    this.todos.push();
  }


  ngOnInit(): void {    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('??rerendred');
  }

}
