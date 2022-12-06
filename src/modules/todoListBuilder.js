const todoListBuilder = (data) => {
  const { index, description } = data;
  const listItem = `
    <li class="todo-list-item--wrapper" id=${index} data-completed=${completed}>
      <div class="todo-list--item padding">
        <div>
          <input type="checkbox">
          <span>${description}</span>
        </div>
        <i class="fa-solid fa-ellipsis-vertical elipsis"></i>
      </div>
      <span class="divider"></span>
    </li>
  `
  return listItem;
}

export default todoListBuilder;