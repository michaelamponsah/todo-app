import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import renderData from './renderData.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos');
const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleTaskComplete = (index, isCompleted) => {
  todos[index].isCompleted = isCompleted;

  saveResourceToLocalStorage('todos', todos);
  renderData(todos, todoListWrapper);
  window.location.reload();
};

export default handleTaskComplete;