import { Component, Input } from '@angular/core';

export interface Todo {
    name: string;
    decription: string;
    isDone: boolean;
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

    title = 'TODO item title';
    cardDescription = 'Some description';

    handleTitleChange() {
        this.title = 'I changed it!';
    }

    handleInputChange(value: any) {
        console.log('??value', value);

        if (value?.target?.value) {
            this.title = value.target.value;
            return;
        } 
        
        if (typeof value === 'string') {
            this.cardDescription = value;
        }
    }
}
