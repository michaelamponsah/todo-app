import 'lodash';
import './style.css';

import todoListBuilder from './modules/todoListBuilder.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');
const todoInputField = document.querySelector('[data-todo-input]');
const addBtn = document.querySelector('[data-add-btn]');

const data = [];

const renderData = () => {
  data.forEach((listItem) => {
    todoListWrapper.innerHTML += todoListBuilder(listItem);
  });
};

window.onload = renderData;

todoInputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const todoObject = {
      index: data.length,
      description: e.target.value,
      isCompleted: false,
    };
    data.push(todoObject);
    e.target.value = '';
  }
});