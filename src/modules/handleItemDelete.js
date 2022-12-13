import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos');

const handleItemDelete = (index) => {
  todos.splice(index, 1);

  // Reassign the indexes of the todos
  todos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  saveResourceToLocalStorage('todos', todos);
};

export default handleItemDelete;