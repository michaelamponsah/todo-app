import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import renderData from './renderData.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos') || [];
const todoListWrapper = document.querySelector('[data-list-wrapper]');

const saveTodo = (newTodo) => {
  newTodo.index = todos.length;
  todos.push(newTodo);

  saveResourceToLocalStorage('todos', todos);
  renderData(todos, todoListWrapper);
  return true;
};

export default saveTodo;