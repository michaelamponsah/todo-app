import addToMarkup from './addToMarkup.js';
import handleItemDelete from './handleItemDelete.js';
import handleTaskComplete from './handleTaskComplete.js';
import saveTodo from './saveTodo.js';
import updateTodo from './updateTodo.js';
import getResourceFromLocalStorage from './__mocks__/getResourceFromLocalStorage.js';
import handleClearAll from './handleClearAll.js';

jest.mock('./getResourceFromLocalStorage');
jest.mock('./saveResourceToLocalStorage');
jest.mock('./addToMarkup');
jest.mock('./renderTodos');

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

  test('Remove a single todo from local storage & DOM', () => {
    // Act
    const deletedTodo = handleItemDelete(0);
    // Assert
    expect(deletedTodo).toHaveLength(1);
    expect(deletedTodo[0]).toEqual({
      description: 'test 1',
      index: 1,
      isCompleted: false,
    });
  });

  test('Add a single todo to local storage', () => {
    const newLength = saveTodo(testData);
    expect(newLength).toBe(4);
  });
});

describe('Testing updateTodo(), handleTaskComplete() and handleClearAll()', () => {
  test('updateTodo() test', () => {
    // Arrange
    const testData = {
      description: 'Updated task',
      index: 1,
      isCompleted: false,
    };

    // Act
    const updatedTask = updateTodo(testData);

    // Assert
    expect(updatedTask).toEqual(testData);
  });

  test('Check completed status', () => {
    const updatedTask = handleTaskComplete(0, true);
    expect(updatedTask).toEqual({
      description: 'test 1',
      index: 1,
      isCompleted: true,
    });
  });
  
  test('Check validity of clear all completed function', () => {
    const testData = getResourceFromLocalStorage();

    const result = handleClearAll(testData);
    expect(result.length).toBe(2);
  });
});
