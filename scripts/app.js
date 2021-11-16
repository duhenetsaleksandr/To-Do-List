addTaskBtn.addEventListener('click', addNewTask);
editTaskBtn.addEventListener('click', editTask);
addTaskValue.addEventListener('keydown', submit);
listTask.addEventListener('click', listHandlerClick);

window.onload = function () {
   addTaskValue.focus();
   loadFromLocaleStorage();
}

