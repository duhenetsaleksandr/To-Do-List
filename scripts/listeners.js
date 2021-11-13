function addNewTask(event) {
   event.preventDefault();

   const text = addTaskValue.value.trim();
   addTaskValue.value = '';
   addTaskValue.focus();

   if (text.length === 0) return;
   listTask.append(createTaskElement(text));
   saveToLocaleStorage();
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
   element.classList.toggle('checked');
   saveToLocaleStorage();
}