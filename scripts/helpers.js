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

function deleteTask(element) {
   element.remove();
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

function saveToLocaleStorage() {
   localStorage.setItem('listTasks', listTask.innerHTML);
}

function loadFromLocaleStorage() {
   listTask.innerHTML = localStorage.getItem('listTasks');
}