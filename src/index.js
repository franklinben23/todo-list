import './style.css';
import { updateToTrue, updateToFalse } from './updateStatus.js';
import {
  setIndex, clearedList, create, removeElement,
} from './scripts.js';

const taskList = document.querySelector('.task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('form-input');
const clearList = document.querySelector('.to-rm');

let list = JSON.parse(localStorage.getItem('list')) || [];

const record = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

const checkedBox = (element) => {
  element.checked = true;
};

const render = () => {
  removeElement(taskList);
  list.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const label = document.createElement('label');
    label.classList.add('task-label');

    const rmIcon = document.createElement('i');
    rmIcon.classList.add('fas');
    rmIcon.classList.add('fa-trash-alt');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fas');
    editIcon.classList.add('fa-edit');

    label.innerHTML = task.name;

    li.append(checkbox);
    li.append(label);
    li.append(rmIcon);
    li.append(editIcon);
    taskList.appendChild(li);

    if (task.completed === true) {
      li.classList.add('crossed');
      checkedBox(checkbox);
    }

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

    editIcon.addEventListener('click', () => {
      const newInput = document.createElement('input');
      const saveBtn = document.createElement('button');
      newInput.type = 'text';
      newInput.placeholder = 'Enter new task name';
      saveBtn.type = 'submit';
      saveBtn.innerText = 'Save';
      label.innerText = '';
      li.removeChild(editIcon);
      li.removeChild(rmIcon);
      li.removeChild(checkbox);
      li.appendChild(newInput);
      li.appendChild(saveBtn);
      saveBtn.addEventListener('click', () => {
        task.name = newInput.value;
        record();
        render();
      });
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

clearList.addEventListener('click', () => {
  list = clearedList(list);
  setIndex(list);
  record();
  render();
});

render();
