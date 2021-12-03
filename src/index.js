import _ from 'lodash';
import './style.css';

const taskList = document.querySelector('.task-list');


let list = [{name: 'wash the dishes', id:1}, {name: 'walk the dog', id:2}, {name: 'dry the clothes', id:3}];

const render = () => {
  list.forEach(task => {

    const li = document.createElement('li');
    li.classList.add('task')

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox')

    const label = document.createElement('label');
    label.classList.add('task-label')

    label.innerHTML = task.name

    li.appendChild(checkbox)
    li.appendChild(label)
    taskList.appendChild(li)

  })
};

render();

