import addToMarkup from './addToMarkup.js';

const renderTodos = (todos) => {
	document.body.innerHTML = `
      <ul class="todo-list--body" data-list-wrapper>
        <li class="todo-list-item--wrapper"></li>
      </ul>
    `;

  const location = document.querySelector('[data-list-wrapper]');
  // location.innerHTML = '';

  todos.forEach((todo) => {
    addToMarkup(todo, location);
  });
};

export default renderTodos;