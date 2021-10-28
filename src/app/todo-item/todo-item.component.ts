import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo-service.service';

export interface Todo {
    name: string;
    description: string;
    isCompleted: boolean;
    id: string;
}

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    // template: ''
    styleUrls: ['./todo-item.component.scss'],
    // interpolation: ['[[', ']]'],
})
export class CardCompnent {

    @Input()todoInfo!: Todo;
    @Input()number!: number;

    constructor(private todoService: TodoService) {}

    handleDeleteTodo() {
        this.todoService.deleteTodo(this.todoInfo);
    }
    // title: string = todoInc

    // handleInputChange(value: any) {
    //     console.log('??form value', value);
        
    //     if (value?.target?.value) {
    //         this.title = value.target.value;
    //         return;
    //     } 
        
    //     if (typeof value === 'string') {
    //         this.cardDescription = value;
    //     }
    // }
}
