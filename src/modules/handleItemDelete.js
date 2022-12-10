import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import renderData from './renderData.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos');
const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleItemDelete = (index) => {
  todos.splice(index, 1);

  // Reassign the indexes of the todos
  todos.forEach((todo, index) => {
    todo.index = index;
  });

  saveResourceToLocalStorage('todos', todos);
  renderData(todos, todoListWrapper);
  window.location.reload();
};

export default handleItemDelete;