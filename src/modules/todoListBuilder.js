const todoListBuilder = (data) => {
  const { index, description, isCompleted } = data;
  const listItem = `
    <li class="todo-list-item--wrapper" id=${index} data-completed=${isCompleted}>
      <div class="todo-list--item padding">
        <div class="input-desc-wrapper">
          <input type="checkbox">
          <p class="description">${description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical elipsis"></i>
      </div>
      <span class="divider"></span>
    </li>
  `;
  return listItem;
};

export default todoListBuilder;