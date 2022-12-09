const handleItemFocus = (elipses, textEntries, deleteIcons) => {
  textEntries.forEach((textEntry, index) => {
    textEntry.addEventListener('focus', () => {
      textEntry.closest('.todo-list-item--wrapper').classList.add('active-item');

      elipses[index].classList.add('icon-hide');
      deleteIcons[index].classList.remove('icon-hide');

      deleteIcons[index].classList.add('delete');
    });
  });

  textEntries.forEach((textEntry, index) => {
    textEntry.addEventListener('blur', () => {
      textEntry.closest('.todo-list-item--wrapper').classList.remove('active-item');

      deleteIcons[index].classList.add('icon-hide');
      deleteIcons[index].classList.remove('delete');

      elipses[index].classList.remove('icon-hide');
    });
  });
};

export default handleItemFocus;