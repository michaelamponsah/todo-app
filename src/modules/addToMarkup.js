import todoListBuilder from './todoListBuilder.js';

const addToMarkup = (data, location) => {
  if (!data) return;
  const li = document.createElement('li');
  li.classList.add('todo-list-item--wrapper');
  li.setAttribute('id', `todo-${data.index}`);

  li.innerHTML = todoListBuilder(data);
  location.insertAdjacentElement('beforeend', li);
};

export default addToMarkup;