function Task(id, title, completed) {
   this.id = id;
   this.value = title;
   this.completed = completed;
}

function createTaskElement({id, title, completed} = {}) {
   if (typeof title !== 'string') return null;
   title = title.trim();
   if (title.length === 0) return null;
   const task = document.createElement('div');
   task.classList.add('list-task__item');
   task.setAttribute('data-id', id);
   task.innerHTML = `
      <div class="list-task__item__check">${title}</div>
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
   const URLTodo = `${URL}/${elemId}`;
   document.body.classList.add('loader');
   fetch(URLTodo, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      }
   })
      .then(response => response.json())
      .then(data => (console.log(data), data))
      .then(() => element.remove())
      .finally(() => document.body.classList.remove('loader'))

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