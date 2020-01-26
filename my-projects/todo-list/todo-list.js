const addButton = document.querySelector('.todo-list__add-button');
const toDoInput = document.querySelector('.todo-list__input');
const activeTasksList = document.querySelector('.todo-list__active-tasks');
const completedTasksList = document.querySelector('.todo-list__completed-tasks');

const addNewTask = () => {
  const newTaskLi = setTaskRow();
  addTaskToActiveList(newTaskLi, activeTasksList);
  clearInputValue();
}

const setTaskRow = () => {
  const newTask = document.createElement('li');
  newTask.classList.add('todo-list__active-task');

  const inputValue = toDoInput.value;
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('todo-list__task-row');
  newTask.appendChild(newTaskContainer);

  const newTaskValue = document.createElement('span');
  newTaskValue.innerText = inputValue;
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '&#x2714;';
  completeButton.classList.add('todo-list__complete-button');
  completeButton.addEventListener('click', completeTask);
  
  newTaskContainer.appendChild(newTaskValue);
  newTaskContainer.appendChild(completeButton);

  return newTask;
}

const addTaskToActiveList = (newTask, tasksList) => {
  const firstChild = tasksList.firstChild;
  if (firstChild) {
    tasksList.insertBefore(newTask, firstChild);
  } else {
    tasksList.appendChild(newTask);
  }
}

const clearInputValue = () => {
  toDoInput.value = '';
}

const completeTask = function () {
  const curentTaskDiv = this.parentNode;
  const currentTaskLi = curentTaskDiv.parentNode;
  const completeButtonInCompletedList = curentTaskDiv.querySelector('button');
  completeButtonInCompletedList.remove();
  currentTaskLi.remove();
  currentTaskLi.classList.add('todo-list__completed-task');
  addTaskToActiveList(currentTaskLi, completedTasksList);
}

toDoInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    addNewTask();
  }
});

addButton.addEventListener('click', addNewTask);

