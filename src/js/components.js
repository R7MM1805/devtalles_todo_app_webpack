import { Todo } from '../classes';
import { todoList } from '../index';

const todoListUL = document.querySelector('.todo-list');
const newTodoInput = document.querySelector('.new-todo');
const clearCompleted = document.querySelector('.clear-completed');
const filters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filter');
const pendingCount = document.querySelector('.todo-count');

export const createTodoHTML = (todo) => {
    const isCompleted = todo.completed;
    const todoHtml = `
    <li class="${isCompleted ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${isCompleted ? 'checked' : ''} >
            <label>${todo.todo}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    todoListUL.innerHTML += todoHtml;
    updatePendingCount();
}

const updatePendingCount = () => {
    pendingCount.innerText = `${todoList.getTodoPending()} pendiente(s)`;
}

newTodoInput.addEventListener('keyup', (event) => {
    const value = event.target.value;
    if(event.keyCode === 13 && value !== null && value.trim() !== ''){
        const newTodo = new Todo(value);
        todoList.addNewTodo(newTodo);
        createTodoHTML(newTodo);
        updatePendingCount();
        event.target.value = '';
    }
});

todoListUL.addEventListener('click', (event) => {
    const element = event.target.localName;
    const liElement = event.target.parentNode.parentElement;
    const todoID = liElement.getAttribute('data-id');
    if(element.includes('input')){
        todoList.toggleTodo(todoID);
        liElement.classList.toggle('completed');
    }
    if(element.includes('button')){
        todoList.deleteTodo(todoID);
        todoListUL.removeChild(liElement);
    }
    updatePendingCount();
});

clearCompleted.addEventListener('click', () =>{
    todoList.deleteCompleted();
    const liElements = todoListUL.children;
    let element;
    for (let index = liElements.length - 1; index >= 0; index--) {
        element = liElements[index];
        if(element.classList.contains('completed')){
            todoListUL.removeChild(element);
        }
    }
    updatePendingCount();
});

filters.addEventListener('click', (event) => {
    const textValue = event.target.text;
    let isCompleted;
    anchorFilters.forEach(x => x.classList.remove('selected'));
    if(textValue){
        for (const liElement of todoListUL.children) {
            liElement.classList.remove('hidden');
            event.target.classList.add('selected');
            isCompleted = liElement.classList.contains('completed');
            switch(textValue){
                case 'Pendientes':
                    if(isCompleted){
                        liElement.classList.add('hidden');
                    }
                    break;
                case 'Completados':
                    if(!isCompleted){
                        liElement.classList.add('hidden');
                    }
                    break;
            }
        }
    }
    updatePendingCount();
});