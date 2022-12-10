import renderData from './renderData.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleClearAll = (todos) => {
  const updatedTodos = todos.filter((todo) => !todo.isCompleted);
  saveResourceToLocalStorage('todos', updatedTodos);
  renderData(updatedTodos, todoListWrapper);
  window.location.reload();
};

export default handleClearAll;