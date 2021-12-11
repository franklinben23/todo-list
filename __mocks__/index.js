const list = [
  { id: 0, name: 'first element', completed: true },
];

document.body.innerHTML = '<div>'
    + '  <ul class="task-list">'
    + '  </ul>'
    + '</div>';

const taskList = document.querySelector('.task-list');

const render = () => {
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
    }
  });
};
/* eslint-disable */

export { render };

/* eslint-enable */