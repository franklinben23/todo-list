import './style.css';
import { updateToTrue, updateToFalse } from './updateStatus.js';
import { setIndex } from './scripts.js'

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

    const rmIcon =  document.createElement('i');
    rmIcon.classList.add('fas')
    rmIcon.classList.add('fa-trash-alt')

    label.innerHTML = task.name;

    li.append(checkbox);
    li.append(label);
    li.append(rmIcon)
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

    rmIcon.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      const index = list.indexOf(task);
      list.splice(index, 1);
      setIndex(list);
      record();
    });
  });
};

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
