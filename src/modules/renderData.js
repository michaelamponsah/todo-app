import todoListBuilder from './todoListBuilder.js';

const renderData = (data, location) => {
  if (!data) return;

  location.innerHTML = '';
  const ul = document.createElement('ul');
  ul.classList.add('todo-list--body');

  data.forEach((listItem) => {
    ul.innerHTML += todoListBuilder(listItem);
    location.insertAdjacentElement('beforeend', ul);
  });
};

export default renderData;