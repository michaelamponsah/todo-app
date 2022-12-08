import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

let todos = getResourceFromLocalStorage('todos');

const saveTodo = (newTodo) => {
  if (!todos) {
    todos = [];
  }
  todos.push(newTodo);
  saveResourceToLocalStorage('todos', todos);
  return true;
};

export default saveTodo;