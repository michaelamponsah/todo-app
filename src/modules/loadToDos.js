import addToMarkup from './addToMarkup.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const loadToDos = (todosArray) => {
  todosArray.forEach((todo) => {
    addToMarkup(todo, todoListWrapper);
  });
};

export default loadToDos;