function addNewTask(event) {
   if (Object.prototype.toString.call(event).slice(8, -1) === 'PointerEvent') {
      event.preventDefault();
   }

   const text = addTaskValue.value.trim();
   addTaskValue.value = '';
   addTaskValue.focus();

   if (text.length === 0) return false;

   const task = {
      title: text,
      completed: false
   };

   document.body.classList.add('loader');
   fetch(URL, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      }
   })
      .then(response => response.json())
      .then(data => (console.log(data), data))
      .then(addTask)
      .finally(() => document.body.classList.remove('loader'))

   return true;
}

function editTask(event) {
   if (Object.prototype.toString.call(event).slice(8, -1) === 'PointerEvent') {
      event.preventDefault();
   }
   if (Object.prototype.toString.call(currentEditTask).slice(8, -1) !== 'HTMLDivElement') return false;
   if (!currentEditTask.classList.contains('list-task__item')) return false;
   addTaskBtn.classList.toggle('hide-btn');
   editTaskBtn.classList.toggle('hide-btn');
   if (addTaskValue.value.trim() === '') {
      currentEditTask = null;
      return false;
   }

   const elemId = Number(currentEditTask.getAttribute('data-id'));
   const URLTodo = `${URL}/${elemId}`;
   const task = {
      id: elemId,
      title: addTaskValue.value,
      completed: currentEditTask.classList.contains('checked')
   };
   document.body.classList.add('loader');
   fetch(URLTodo, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
   })
      .then(response => response.json())
      .then(data => (console.log(data), data))
      .then(data => {
         if (!data.title) {
            throw new Error('Title is not defined!');
         }
         currentEditTask.querySelector('.list-task__item__check').innerText = data.title
      })
      .catch(error => console.log(error))
      .finally(() => {
         currentEditTask = null;
         document.body.classList.remove('loader')
      })

   addTaskValue.value = '';

   return true;
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
   if (!element.classList.contains('list-task__item')) return;

   const elemId = Number(element.getAttribute('data-id'));
   const text = element.querySelector('.list-task__item__check').innerText;

   const URLTodo = `${URL}/${elemId}`;
   const task = {
      id: elemId,
      title: text,
      completed: !element.classList.contains('checked')
   };
   document.body.classList.add('loader');
   fetch(URLTodo, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
   })
      .then(response => response.json())
      .then(data => (console.log(data), data))
      .then(() => element.classList.toggle('checked'))
      .finally(() => document.body.classList.remove('loader'))
}