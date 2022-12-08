import 'lodash';
import './style.css';

import todoListBuilder from './modules/todoListBuilder.js';
import saveResourceToLocalStorage from './modules/saveResourceToLocalStorage.js';
import getResourceFromLocalStorage from './modules/getResourceFromLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');
const todoInputField = document.querySelector('[data-todo-input]');
// const addBtn = document.querySelector('[data-add-btn]');

const dataFromStorage = getResourceFromLocalStorage('todos');

const data = dataFromStorage ? [...dataFromStorage] : [];

const renderData = (data) => {
  if (!data) return;

  data.forEach((listItem) => {
    todoListWrapper.innerHTML += todoListBuilder(listItem);
  });
};

renderData(data);

todoInputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const todoObject = {
      index: data.length,
      description: e.target.value,
      isCompleted: false,
    };

    e.target.value = '';

    if (!dataFromStorage) {
      data.push(todoObject);
      saveResourceToLocalStorage('todos', data);
      window.location.reload();
      return true;
    }

    const newEntry = [...data];
    newEntry.push(todoObject);
    saveResourceToLocalStorage('todos', newEntry);
    window.location.reload();
  }
  return true;
});