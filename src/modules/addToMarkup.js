import todoListBuilder from './todoListBuilder.js';

const addToMarkup = (data, location) => {
  if (!data) return;

  // location.innerHTML = '';
  const li = document.createElement('li');
  li.classList.add('todo-list-item--wrapper');
  li.setAttribute('id', `todo-${data.index}`);

  li.innerHTML = todoListBuilder(data);
  location.insertAdjacentElement('beforeend', li);

  // data.forEach((listItem) => {
  //   li.innerHTML += todoListBuilder(listItem);
  //   location.insertAdjacentElement('beforeend', li);
  // });
};

export default addToMarkup;