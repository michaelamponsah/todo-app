import 'lodash';
import './style.css';

import todoListBuilder from './modules/todoListBuilder.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const data = [

  {
    index: 1,
    description: 'do my laundry',
    isCompleted: false,
  },
  {
    index: 2,
    description: 'build a new feature for fitness app',
    isCompleted: false,
  },
];

const renderData = () => {
  data.forEach((listItem) => {
    todoListWrapper.innerHTML += todoListBuilder(listItem);
  });
};
// Test
window.onload = renderData;
