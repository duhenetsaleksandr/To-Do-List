function Task(id, value, completed) {
   this.id = id;
   this.value = value;
   this.completed = completed;
}

function createTaskElement({id, value, completed} = {}) {
   if (typeof value !== 'string') return null;
   value = value.trim();
   if (value.length === 0) return null;
   const task = document.createElement('div');
   task.classList.add('list-task__item');
   task.setAttribute('data-id', id);
   task.innerHTML = `
      <div class="list-task__item__check">${value}</div>
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
   localStorage.removeItem(`todo${elemId}`);

   element.remove();

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

function saveToLocaleStorage(taskObject) {
   localStorage.setItem(`todo${taskObject.id}`, JSON.stringify(taskObject));
}

function loadFromLocaleStorage() {
   const localStorageKeys = [];
   for (let i = 0; i < localStorage.length; i++) {
      localStorageKeys.push(localStorage.key(i));
   }

   const toDoId = localStorageKeys.filter(key => key.includes('todo')).map(key => Number(key.slice(4)));
   toDoId.sort((a, b) => a - b).forEach(id => {
      const toDoObject = JSON.parse(localStorage.getItem(`todo${id}`));
      listTask.append(createTaskElement(toDoObject));
      console.log(toDoObject);
   });

   globalId = ++toDoId[toDoId.length - 1] || 1;
}