addTaskBtn.addEventListener('click', addNewTask);
editTaskBtn.addEventListener('click', editTask);
addTaskValue.addEventListener('keydown', submit);
listTask.addEventListener('click', listHandlerClick);

function addTask(todo) {
   listTask.append(createTaskElement(todo));
}

window.onload = function () {
   addTaskValue.focus();

   document.body.classList.add('loader');
   fetch(URLGet)
      .then(response => response.json())
      .then(data => data.forEach(addTask))
      .finally(() => document.body.classList.remove('loader'))
}