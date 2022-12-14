import addToMarkup from './addToMarkup.js';

const renderTodos = (todos, location) => {
  location.innerHTML = '';

  todos.forEach((todo) => {
    addToMarkup(todo, location);
  });
};

export default renderTodos;