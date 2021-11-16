function createTaskElement(taskText, id, completed) {
   if (typeof taskText !== 'string') return null;
   taskText = taskText.trim();
   if (taskText.length === 0) return null;
   const task = document.createElement('div');
   task.classList.add('list-task__item');
   task.setAttribute('data-id', id);
   task.innerHTML = `
      <div class="list-task__item__check">${taskText}</div>
      <div class="list-task__item__edit"></div>
      <div class="list-task__item__delete"></div>
   `;

   if (completed) task.classList.add('checked');
   return task;
}

function deleteTask(element) {
   if (Object.prototype.toString.call(element).slice(8, -1) !== 'HTMLDivElement') return false;
   if (!element.classList.contains('list-task__item')) return false;
   const elemId = element.getAttribute('data-id');
   const index = tasks.findIndex(({id}) => id === +elemId);

   tasks.splice(index, 1);
   element.remove();

   saveToLocaleStorage();
   return true;
}

function showEditBtn(element) {
   if (Object.prototype.toString.call(element).slice(8, -1) !== 'HTMLDivElement') return false;
   if (!element.classList.contains('list-task__item')) return false;
   addTaskValue.value = element.querySelector('.list-task__item__check').innerText;
   currentEditTask = element;
   addTaskValue.focus();

   if (editTaskBtn.classList.contains('hide-btn')) {
      addTaskBtn.classList.toggle('hide-btn');
      editTaskBtn.classList.toggle('hide-btn');
   }
   return true;
}

function saveToLocaleStorage() {
   localStorage.setItem('listTasks', JSON.stringify(tasks));
}

function loadFromLocaleStorage() {
   tasks = JSON.parse(localStorage.getItem('listTasks')) || [];

   tasks.forEach(({id, value, completed}) => {
      globalId = id > globalId ? id : globalId;
      listTask.append(createTaskElement(value, id, completed));
   });
   globalId++;
}