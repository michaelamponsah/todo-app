const handleItemFocus = (textEntries, deleteIcons) => {
  textEntries.forEach((textEntry, index) => {
    textEntry.addEventListener('focus', () => {
      textEntry.closest('.todo-list-item--wrapper').classList.add('active-item');

      deleteIcons[index].classList.add('icon-delete');
    });
  });

  textEntries.forEach((textEntry, index) => {
    textEntry.addEventListener('blur', () => {
      textEntry.closest('.todo-list-item--wrapper').classList.remove('active-item');

      deleteIcons[index].classList.remove('icon-delete');
    });
  });
};

export default handleItemFocus;