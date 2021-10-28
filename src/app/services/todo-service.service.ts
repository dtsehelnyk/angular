import { Injectable } from '@angular/core';
import { Todo } from "src/shared/introTodos";
import { BehaviorSubject, Observable, of } from 'rxjs';

interface TodoServicePayload {
  getTodos: () => void;
  addTodo: ({ name, description }: Todo) => void;
  deleteTodo: ({ name }: Todo) => void;
  deleteAll: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService implements TodoServicePayload {
  private todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  todos$ = new BehaviorSubject<Todo[]>(this.todos);
 
  constructor() { }

  getTodos(): void {
    this.todos$.next(JSON.parse(localStorage.getItem('todos') || '[]'));
  }

  addTodo({ name, description }: Todo): void {       
    // const oldTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    const withNewTodo = [...this.todos, {
      name: name,
      description: description,
      isCompleted: false,
      id: new Date().toString(),
    }];

    localStorage.setItem('todos', JSON.stringify(withNewTodo));
    this.todos = withNewTodo;
    this.todos$.next(withNewTodo);
  }

  deleteTodo({ id }: Todo): void {
    const filteredTodos = this.todos.filter((todo) => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(filteredTodos));

    this.todos = filteredTodos;
    this.todos$.next(filteredTodos);
  }

  deleteAll(): void {
    localStorage.removeItem('todos');
    this.todos$.next([]);
    this.todos = [];
  }
}
