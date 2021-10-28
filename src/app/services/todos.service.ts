import { Todo } from "src/shared/introTodos";

interface TodosServicePayload {
    count: number;
    getTodos: () => Todo[];
    getCount: () => number;
    setCount: () => void;
    addTodo: ({ name, description }: Todo) => void;
    deleteTodo: ({ name }: Todo) => void;
    deleteAll: () => void;
} 

export class TodosService implements TodosServicePayload {
    // private todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    count = 0;

    getCount(): number {
        console.log(this.count);
        return this.count;
    }

    setCount(): void {
        console.log('??count', this.count);
        this.count++;
    }

    getTodos(): Todo[] {
        return JSON.parse(localStorage.getItem('todos') || '[]');
        // return this.todos;
    }

    addTodo({name, description}: Todo): void {       
        const todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');        
        const withNewTodo = [...todos, {
            name: name,
            description: description,
            isDone: false,
        }];

        localStorage.setItem('todos', JSON.stringify(withNewTodo));
    }

    deleteTodo({name}: Todo): void {
        const todos: Todo[] = this.getTodos();
        const filteredTodos = todos.filter((todo) => todo.name !== name);

        localStorage.setItem('todos', JSON.stringify(filteredTodos));
    }

    deleteAll(): void {
        localStorage.removeItem('todos');
    }
}
