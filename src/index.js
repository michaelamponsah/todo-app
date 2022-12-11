import 'lodash';
import './style.css';

import getResourceFromLocalStorage from './modules/getResourceFromLocalStorage.js';
import saveTodo from './modules/saveTodo.js';
import renderData from './modules/renderData.js';
import handleItemFocus from './modules/handleItemFocus.js';
import updateTodo from './modules/updateTodo.js';
import handleItemDelete from './modules/handleItemDelete.js';
import handleTaskComplete from './modules/handleTaskComplete.js';
import handleClearAll from './modules/handleClearAll.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');
const todoInputField = document.querySelector('[data-todo-input]');

// Get data from local storage
const dataFromStorage = getResourceFromLocalStorage('todos');
const todosArray = dataFromStorage || [];

// Render data when page loads
window.onload = renderData(todosArray, todoListWrapper);

// Get input from user
todoInputField.addEventListener('keypress', (e) => {
  const description = e.target.value.trim();
  if (e.key === 'Enter' && description) {
    const newTodo = {
      description,
      isCompleted: false,
    };

    e.target.value = '';
    saveTodo(newTodo);
    window.location.reload();
  }

  return true;
});

const textEntries = document.querySelectorAll('.description');
const deleteIcons = document.querySelectorAll('[data-delete]');

// Handle focus (background color) of active todo items
handleItemFocus(textEntries, deleteIcons);

// Update todo items
textEntries.forEach((textEntry) => {
  textEntry.addEventListener('keypress', (e) => {
    const updatedDescription = e.target.value.trim();
    const todoId = e.target.closest('.todo-list-item--wrapper').getAttribute('id');

    if (e.key === 'Enter' && updatedDescription) {
      const updatedTodo = {
        index: todoId,
        description: updatedDescription,
      };
      updateTodo(updatedTodo);
    }
  });
});

textEntries.forEach((textEntry) => {
  textEntry.addEventListener('change', (e) => {
    const updatedDescription = e.target.value.trim();
    const todoId = e.target.closest('.todo-list-item--wrapper').getAttribute('id');

    const updatedTodo = {
      index: todoId,
      description: updatedDescription,
    };
    updateTodo(updatedTodo);
  });
});

// Delete todo item
deleteIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    handleItemDelete(index);
  });
});

// Handle page reload
document.querySelector('[data-refresh]').addEventListener('click', () => {
  window.location.reload();
});

// Handle todo complete status
document.querySelectorAll('[data-inputcheck]').forEach((inputCheck, index) => {
  inputCheck.addEventListener('change', (e) => {
    const isCompleted = e.target.toggleAttribute('checked');
    textEntries[index].toggleAttribute('data-task-complete');
    handleTaskComplete(index, isCompleted);
  });
});

// Handle clear all
document.querySelector('[data-clear-btn]').addEventListener('click', () => {
  handleClearAll(todosArray);
});