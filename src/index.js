import 'lodash';
import './style.css';

import getResourceFromLocalStorage from './modules/getResourceFromLocalStorage.js';
import saveTodo from './modules/saveTodo.js';
import handleItemFocus from './modules/handleItemFocus.js';
import updateTodo from './modules/updateTodo.js';
import handleItemDelete from './modules/handleItemDelete.js';
import handleTaskComplete from './modules/handleTaskComplete.js';
import handleClearAll from './modules/handleClearAll.js';
import loadToDos from './modules/loadToDos.js';

const todoInputField = document.querySelector('[data-todo-input]');
const todoListWrapper = document.querySelector('[data-list-wrapper]');

// Get data from local storage
const todosArray = getResourceFromLocalStorage('todos') || [];

// Render data when page loads
window.onload = loadToDos(todosArray);

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
  }

  return true;
});

const textEntries = document.querySelectorAll('.description');
const deleteIcons = document.querySelectorAll('[data-delete]');

// Handle focus (background color & delete icon handler) of active todo items
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

// Handle todo item delete
todoListWrapper.addEventListener('click', (e) => {
  const todoId = e.target.parentNode.parentNode.getAttribute('id');
  const isdeleteIcon = e.target.matches('[data-delete]');

  if (isdeleteIcon) {
    const index = Number.parseInt(todoId.slice(5), 10);
    document.getElementById(todoId).remove();
    handleItemDelete((index - 1));
  }
});

// Handle page reload
document.querySelector('[data-refresh]').addEventListener('click', () => {
  window.location.reload();
});

// Handle todo complete status
todoListWrapper.addEventListener('change', (e) => {
  const isCheckInput = e.target.matches('[data-inputcheck]');
  const todoId = e.target.closest('li').getAttribute('id');
  const textEntry = e.target.nextElementSibling;
  const index = Number.parseInt(todoId.slice(5), 10);

  if (isCheckInput) {
    const isCompleted = e.target.toggleAttribute('checked');
    textEntry.toggleAttribute('data-task-complete');
    handleTaskComplete((index - 1), isCompleted);
  }
});

// Handle clear all
document.querySelector('[data-clear-btn]').addEventListener('click', () => {
  handleClearAll(todosArray);
});