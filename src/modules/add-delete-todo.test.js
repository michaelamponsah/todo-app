import addToMarkup from './addToMarkup.js';
import handleItemDelete from './handleItemDelete.js';
import saveTodo from './saveTodo.js';

jest.mock('./getResourceFromLocalStorage');
jest.mock('./saveResourceToLocalStorage');
jest.mock('./addToMarkup');

describe('Add/remove todo task item to/from local storage and DOM', () => {
  const testData = {
    description: 'Test description',
    isCompleted: false,
    index: 2,
  };

  test('Adds a single li to ul', () => {
    const list = addToMarkup(testData);
    expect(list).toHaveLength(2);
  });

  test('Add a single todo to local storage', () => {
    const newLength = saveTodo(testData);
    expect(newLength).toEqual(2);
  });
});