import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos');

const handleTaskComplete = (index, isCompleted) => {
  todos[index].isCompleted = isCompleted;
  saveResourceToLocalStorage('todos', todos);
};

export default handleTaskComplete;