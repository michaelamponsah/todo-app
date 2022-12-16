import addToMarkup from './addToMarkup.js';

const renderTodos = (todos) => {
  todos.forEach((todo) => {
    addToMarkup(todo);
  });
};

export default renderTodos;