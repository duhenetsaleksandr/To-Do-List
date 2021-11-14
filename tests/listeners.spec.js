describe('On listeners.js', function () {
   let saveTasks;
   before(function () {
      saveTasks = localStorage.getItem('listTasks');
      listTask.innerHTML = '';
      localStorage.clear();
   });

   after(function () {
      if (saveTasks !== null) localStorage.setItem('listTasks', saveTasks);
   });

   afterEach(function () {
      listTask.innerHTML = '';
      localStorage.clear();
   });

   describe('On addNewTask', function () {
      it('should return true and add new task to listTasks', function () {
         addTaskValue.value = 'first task';
         expect(addNewTask()).to.be.equal(true);
         expect(listTask.childElementCount).to.be.equal(1);
      });

      it('should return false and dont add new task to listTasks for empty value in input', function () {
         addTaskValue.value = '';
         expect(addNewTask()).to.be.equal(false);
         expect(listTask.childElementCount).to.be.equal(0);
      });
   });

   describe('On editTask', function () {
      it('should hide editTaskBtn and show newTaskBtn', function () {
         addTaskValue.value = 'first task';
         addTaskBtn.click();
         const emulatedTasks = listTask.querySelectorAll('.list-task__item');
         emulatedTasks[0].querySelector('.list-task__item__edit').click();
         addTaskValue.value += ' edited';
         editTaskBtn.click();
         expect(editTaskBtn.classList.contains('hide-btn')).to.be.equal(true);
      });

      it('should return false if edited text is empty', function () {
         addTaskValue.value = 'first task';
         addTaskBtn.click();
         const emulatedTasks = listTask.querySelectorAll('.list-task__item');
         emulatedTasks[0].querySelector('.list-task__item__edit').click();
         addTaskValue.value = '';
         expect(editTask()).to.be.equal(false);
      });

      it('should return false if currentEditTask not HTML-element', function () {
         currentEditTask = 'div';
         expect(editTask()).to.be.equal(false);
      });

      it('should return false if currentEditTask not contains class "list-task__item"', function () {
         currentEditTask = document.createElement('div');
         expect(editTask()).to.be.equal(false);
      });
   });

   describe('On listHandlerClick', function () {
      it('should check task', function () {
         addTaskValue.value = 'first task';
         addTaskBtn.click();
         const emulatedList = listTask.querySelectorAll('.list-task__item');
         emulatedList[0].click();
         expect(emulatedList[0].classList.contains('checked')).to.be.equal(true);
         emulatedList[0].click();
         expect(emulatedList[0].classList.contains('checked')).to.be.equal(false);
      });
   });
});