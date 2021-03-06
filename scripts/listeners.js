function addNewTask(event) {
   if (Object.prototype.toString.call(event).slice(8, -1) === 'PointerEvent') {
      event.preventDefault();
   }

   const text = addTaskValue.value.trim();
   addTaskValue.value = '';
   addTaskValue.focus();

   if (text.length === 0) return false;
   listTask.append(createTaskElement(text));
   saveToLocaleStorage();
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
   currentEditTask.querySelector('.list-task__item__check').innerText = addTaskValue.value;
   currentEditTask = null;
   addTaskValue.value = '';
   saveToLocaleStorage();
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
   element.classList.toggle('checked');
   saveToLocaleStorage();
}