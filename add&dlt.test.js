import { create, deleteTask, clearedList } from './src/scripts';
import { render } from './__mocks__/index';

describe('manipulates the list upon interaction', () => {
  const testArr = [
    { id: 0, name: 'first element', completed: true },
    { id: 0, name: 'second element', completed: false },
    { id: 0, name: 'third element', completed: true },
    { id: 0, name: 'fourth element', completed: false },
  ];

  test('creates a new item in the array', () => {
    const newEl = create('test name');
    testArr.push(newEl);
    const lastElement = testArr[testArr.length - 1];
    expect(lastElement.name).toBe('test name');
  });

  test('Add one new item to the list', () => {
    render();
    const list1 = document.querySelectorAll('.task-list');
    console.log(list1);
    expect(list1).toHaveLength(1);
  });

  test('removes an item from the array', () => {
    const isolatedArr = [
      { id: 0, name: 'first element', completed: true },
      { id: 0, name: 'second element', completed: false },
      { id: 0, name: 'third element', completed: true },
    ];
    deleteTask(isolatedArr, 2);
    expect(isolatedArr.length).toBe(2);
  });

  test('filters out completed tasks when called', () => {
    const clearedArr = clearedList(testArr);
    expect(clearedArr.length).toBe(2)
   });
});