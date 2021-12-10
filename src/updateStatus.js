const updateToTrue = (task) => {
  task.completed = true;
};

const updateToFalse = (task) => {
  task.completed = false;
};

export { updateToTrue, updateToFalse };