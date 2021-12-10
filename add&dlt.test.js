import {
  create, deleteTask, clearedList, editFunc,
} from './src/scripts';
import { updateToTrue } from './src/updateStatus';
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
});

describe('Status and content updates', () => {
  const testArr2 = [
    { id: 0, name: 'first element', completed: true },
    { id: 0, name: 'second element', completed: false },
    { id: 0, name: 'third element', completed: true },
    { id: 0, name: 'fourth element', completed: false },
  ];

  test('filters out completed tasks when called', () => {
    const clearedArr = clearedList(testArr2);
    expect(clearedArr.length).toBe(2);
  });

  test('updates task to completed', () => {
    const task = testArr2[1];
    updateToTrue(task);
    expect(task.completed).toBe(true);
  });

  test('edits the task name', () => {
    document.body.innerHTML = '<div>'
    + '  <ul class="task-list">'
    + '   <li class="task-item">'
    + '     <label>wash the dishes</label>'
    + '   </li>'
    + '  </ul>'
    + '</div>';
    const newTask = editFunc('walk the dog');
    expect(newTask).toBe('walk the dog');
  });
});