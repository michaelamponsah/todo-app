import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import renderTodos from './renderTodos.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleTaskComplete = (index, isCompleted) => {
  const todos = getResourceFromLocalStorage('todos');
  todos[index].isCompleted = isCompleted;
  saveResourceToLocalStorage('todos', todos);
  renderTodos(todos, todoListWrapper);
};

export default handleTaskComplete;