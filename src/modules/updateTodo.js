import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';
import renderTodos from './renderTodos.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const updateTodo = (updatedTodo) => {
  const todos = getResourceFromLocalStorage('todos');
  todos[updatedTodo.index - 1].description = updatedTodo.description;

  saveResourceToLocalStorage('todos', todos);
  renderTodos(todos, todoListWrapper);
  return ( todos[updatedTodo.index - 1]);
};

export default updateTodo;