import { Todo, TodoList } from './classes';
import { createTodoHTML } from './js/components';
import './style.css';

export const todoList = new TodoList();
todoList.todos.forEach(createTodoHTML);
todoList.todos = todoList.todos.map(Todo.fromJson);