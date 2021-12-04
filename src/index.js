import './style.css';
import { updateToTrue, updateToFalse } from './updateStatus.js';

const taskList = document.querySelector('.task-list');

const list = [{ name: 'wash the dishes', id: 1, completed: false }, { name: 'walk the dog', id: 2, completed: false }, { name: 'dry the clothes', id: 3, completed: false }];

const record = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

const render = () => {
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

render();
