/* eslint-disable consistent-return */
import todoListBuilder from '../todoListBuilder.js';

const addToMarkup = (data) => {
  // Set up our document body
  document.body.innerHTML = `
      <ul class="todo-list--body" data-list-wrapper>
        <li class="todo-list-item--wrapper"></li>
      </ul>
    `;

  const location = document.querySelector('[data-list-wrapper]');

  if (!data) return;
  const li = document.createElement('li');
  li.classList.add('todo-list-item--wrapper');
  li.setAttribute('id', `todo-${data.index}`);

  li.innerHTML = todoListBuilder(data);
  location.insertAdjacentElement('beforeend', li);

  const list = document.querySelectorAll('.todo-list-item--wrapper');
  return list;
};

export default addToMarkup;