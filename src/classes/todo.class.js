export class Todo{
    static fromJson({id, todo, completed, creationDate}){
        const newTodo = new Todo(todo);
        newTodo.id = id;
        newTodo.completed = completed;
        newTodo.creationDate = creationDate;
        return newTodo;
    }
    constructor(todo){
        this.id  = new Date().getTime().toString();
        this.todo = todo;
        this.completed = false;
        this.creationDate = new Date();
    }
}