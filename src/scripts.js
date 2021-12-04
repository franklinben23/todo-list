const setIndex = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    element.id = parseInt([i], 10) + 1;
  }
};

const clearedList = (array) => {
  const clearedArr = array.filter((object) => object.completed === false);
  return clearedArr;
};

const create = (name) => ({ id: 0, name, completed: false });

const removeElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export {
  setIndex, clearedList, create, removeElement,
};