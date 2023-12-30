import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        this.loadLocalStorage();
    }

    addNewTodo(todo){
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    toggleTodo(todoID){
        for (const todo of this.todos) {
            if(todo.id === todoID){
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteTodo(todoID){
        this.todos = this.todos.filter(todo => todo.id !== todoID);
        this.saveLocalStorage();
    }

    deleteCompleted(){
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadLocalStorage(){
        const data = localStorage.getItem('todos');
        this.todos = data ? JSON.parse(data) : [];
        this.todos = this.todos.map(Todo.fromJson);
    }

    getTodoPending(){
        return this.todos.filter(todo => !todo.completed).length;
    }
}