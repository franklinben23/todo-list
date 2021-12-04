import './style.css';
import { updateToTrue, updateToFalse } from './updateStatus.js';

const taskList = document.querySelector('.task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('form-input');

const list = JSON.parse(localStorage.getItem('list')) || [];

const create = (name) => {
  return { id: 0, name, completed: false }
}

const record = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

const removeElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
};

const render = () => {
  removeElement(taskList)
  list.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const label = document.createElement('label');
    label.classList.add('task-label');

    label.innerHTML = task.name;

    li.append(checkbox);
    li.append(label);
    taskList.appendChild(li);

    checkbox.addEventListener('change', (e) => {
      const taskAtHand = e.target.parentNode;
      if (e.target.checked === true) {
        updateToTrue(task);
        taskAtHand.classList.add('crossed');
        record();
      } else {
        updateToFalse(task);
        taskAtHand.classList.remove('crossed');
        record();
      }
    });
  });
};

function setIndex(array) {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    element.id = parseInt([i], 10) + 1;
  }
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = taskInput.value;
  if (taskName === '') return;
  const task = create(taskName);
  taskInput.value = null;
  list.push(task);
  setIndex(list);
  record();
  render();
});

render();
