const todoListBuilder = (data) => {
  const { index, description, isCompleted } = data;
  const listItemMarkup = `
    <li class="todo-list-item--wrapper" id="${index}" data-completed=${isCompleted} data-id${index}>
      <div class="todo-list--item padding">
        <div class="input-desc-wrapper">
          <input type="checkbox" data-inputcheck ${isCompleted ? 'checked' : ''}>
          <input type="text" class="description" value="${description}" ${isCompleted ? 'readonly="true"' : ''}></input>
        </div>
        <i class="fa-solid fa-trash icon" data-delete></i>
        </div>
      <span class="divider"></span>
    </li>
  `;
  return listItemMarkup;
};

export default todoListBuilder;