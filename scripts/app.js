const addTaskValue = document.getElementById('add-task-value');
const addTaskBtn = document.getElementById('add-task-btn');
const editTaskBtn = document.getElementById('edit-task-btn');
const listTask = document.getElementById('list-task');
let currentEditTask = null;

addTaskBtn.addEventListener('click', addNewTask);
editTaskBtn.addEventListener('click', editTask);
addTaskValue.addEventListener('keydown', submit);
listTask.addEventListener('click', listHandlerClick);

window.onload = function () {
   addTaskValue.focus();
   loadFromLocaleStorage();
}