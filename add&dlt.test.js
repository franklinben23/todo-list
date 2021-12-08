import { TestWatcher } from 'jest';
import { setIndex, clearedList, create, removeElement } from './src/scripts'

describe('manipulates the list upon interaction', () => {
  let testArr = [
    { id: 0, name: "first element", completed: true },
    { id: 0, name: "second element", completed: false },
    { id: 0, name: "third element", completed: true },
    { id: 0, name: "fourth element", completed: false }
  ];

  test('gives each element an unique id when called', () => {
    setIndex(testArr);
    const secondEl = testArr[1];
    expect(secondEl.id).toBe(2)
  });

  test('filters out completed tasks when called', () =>{
    const clearedArr = clearedList(testArr);
    expect(clearedArr.length).toBe(2)
  });

});