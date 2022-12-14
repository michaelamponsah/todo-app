import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const handleItemDelete = (index) => {
  const todos = getResourceFromLocalStorage('todos');
  todos.splice(index, 1);

  // Reassign the indexes of the todos
  todos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  saveResourceToLocalStorage('todos', todos);
};

export default handleItemDelete;