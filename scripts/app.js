const addTaskValue = document.getElementById('add-task-value');
const addTaskBtn = document.getElementById('add-task-btn');
const editTaskBtn = document.getElementById('edit-task-btn');
const listTask = document.getElementById('list-task');
let currentEditTask = null;

addTaskBtn.addEventListener('click', addNewTask);
editTaskBtn.addEventListener('click', editTask);
addTaskValue.addEventListener('keydown', submit);
listTask.addEventListener('click', listHandlerClick);

function saveToLocaleStorage() {
   localStorage.setItem('listTasks', listTask.innerHTML);
}

function editTask(event) {
   event.preventDefault();
   addTaskBtn.classList.toggle('hide-btn');
   editTaskBtn.classList.toggle('hide-btn');
   if (addTaskValue.value.trim() === '') return;
   currentEditTask.querySelector('.list-task__item__check').innerText = addTaskValue.value;
   currentEditTask = null;
   addTaskValue.value = '';
   saveToLocaleStorage();
}

function listHandlerClick(event) {
   let element = event.target;

   if (element.classList.contains('list-task__item__edit')) {
      showEditBtn(element.parentNode);
      return;
   } else if (element.classList.contains('list-task__item__delete')) {
      deleteTask(element.parentNode);
      return;
   }

   element = element.classList.contains('list-task__item') ? element : element.parentNode;
   element.classList.toggle('checked');
   saveToLocaleStorage();
}

function showEditBtn(element) {
   addTaskValue.value = element.querySelector('.list-task__item__check').innerText;
   currentEditTask = element;

   addTaskValue.focus();

   if (editTaskBtn.classList.contains('hide-btn')) {
      addTaskBtn.classList.toggle('hide-btn');
      editTaskBtn.classList.toggle('hide-btn');
   }
}

function deleteTask(element) {
   element.remove();
   saveToLocaleStorage();
}

function submit(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      if (currentEditTask !== null) {
         editTask(event);
      } else {
         addNewTask(event);
      }
   }
}

function addNewTask(event) {
   event.preventDefault();

   const text = addTaskValue.value.trim();
   addTaskValue.value = '';
   addTaskValue.focus();

   if (text.length === 0) return;

   const newElementTask = createTaskElement(text);

   listTask.append(newElementTask);


   saveToLocaleStorage();
}

function createTaskElement(taskText) {
   const task = document.createElement('div');
   task.classList.add('list-task__item');
   task.innerHTML = `
      <div class="list-task__item__check">${taskText}</div>
      <div class="list-task__item__edit"></div>
      <div class="list-task__item__delete"></div>
   `;
   return task;
}

window.onload = function () {
   addTaskValue.focus();
   listTask.innerHTML = localStorage.getItem('listTasks');
}