const todoListBuilder = (data) => {
  const { description, isCompleted } = data;
  const listItemMarkup = `
      <div class="todo-list--item padding">
        <div class="input-desc-wrapper">
          <input type="checkbox" data-inputcheck ${isCompleted ? 'checked' : ''}>
          <input type="text" class="description" value="${description}" ${isCompleted ? 'readonly="true"' : ''}></input>
        </div>
        <i class="fa-solid fa-trash icon" data-delete></i>
        </div>
      <span class="divider"></span>
  `;
  return listItemMarkup;
};

export default todoListBuilder;