import renderTodos from './renderTodos.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleClearAll = (todos) => {
  const updatedTodos = todos.filter((todo) => !todo.isCompleted);
  updatedTodos.forEach((todo, index) => {
    todo.index = index + 1;
  });
  // console.log(updatedTodos);
  saveResourceToLocalStorage('todos', updatedTodos);
  renderTodos(updatedTodos, todoListWrapper);
  // window.location.reload();
};

export default handleClearAll;