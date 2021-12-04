const setIndex = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    element.id = parseInt([i], 10) + 1;
  }
};

export { setIndex }