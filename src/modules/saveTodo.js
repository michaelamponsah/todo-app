import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import addToMarkup from './addToMarkup.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const saveTodo = (newTodo) => {
  const todos = getResourceFromLocalStorage('todos') || [];
  newTodo.index = todos.length + 1;
  todos.push(newTodo);

  saveResourceToLocalStorage('todos', todos);
  addToMarkup(newTodo, todoListWrapper);
  return true;
};

export default saveTodo;