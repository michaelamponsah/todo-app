import 'lodash';
import './style.css';

import todoListBuilder from './modules/todoListBuilder.js';
import getResourceFromLocalStorage from './modules/getResourceFromLocalStorage.js';
import saveTodo from './modules/saveTodo.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');
const todoInputField = document.querySelector('[data-todo-input]');
// const addBtn = document.querySelector('[data-add-btn]');

const dataFromStorage = getResourceFromLocalStorage('todos');
const todos = dataFromStorage ? [...dataFromStorage] : [];

const renderData = () => {
  if (!todos) return;

  todos.forEach((listItem) => {
    todoListWrapper.innerHTML += todoListBuilder(listItem);
  });
};

window.onload = renderData();

todoInputField.addEventListener('keypress', (e) => {
  const description = e.target.value.trim();
  if (e.key === 'Enter' && description) {
    const newTodo = {
      index: todos.length + 1,
      description,
      isCompleted: false,
    };

    e.target.value = '';
    saveTodo(newTodo);
    window.location.reload();
  }
  return true;
});

const elipses = document.querySelectorAll('.elipsis');
const listItems = document.querySelectorAll('.todo-list-item--wrapper');
const textEntries = document.querySelectorAll('.description');

elipses.forEach((elipse) => {
  elipse.addEventListener('click', () => {
    console.log('click');
  });
});

textEntries.forEach((entry) => {
  entry.addEventListener('click', () => {
    entry.setAttribute('contentEditable', true);
    entry.focus();
    if (document.activeElement === entry) {
      entry.closest('.todo-list-item--wrapper').style.backgroundColor = 'rgba(255, 195, 0, 0.2)';
    }
  });
});