describe('On helpers.js', function () {
   let saveTasks;
   before(function () {
      saveTasks = localStorage.getItem('listTasks');
      listTask.innerHTML = '';
      localStorage.clear();
   });

   after(function () {
      if (saveTasks !== null) localStorage.setItem('listTasks', saveTasks);
   });

   beforeEach(function () {
      listTask.innerHTML = '';
      localStorage.clear();
   });

   afterEach(function () {
      listTask.innerHTML = '';
      localStorage.clear();
   });

   describe('On createTaskElement', function () {
      it('should return new html element for task with input text', function () {
         const testTask = document.createElement('div');
         testTask.classList.add('list-task__item');
         testTask.innerHTML = `
            <div class="list-task__item__check">new task</div>
            <div class="list-task__item__edit"></div>
            <div class="list-task__item__delete"></div>
         `;
         expect(createTaskElement('new task')).to.be.eql(testTask);
      });

      it('should return null for input data not string', function () {
         expect(createTaskElement(25)).to.be.equal(null);
      });

      it('should return null for empty string', function () {
         expect(createTaskElement('')).to.be.equal(null);
      });
   });

   describe('On deleteTask', function () {
      it('should return false if input data not HTMLDivElement', function () {
         expect(deleteTask(25)).to.be.equal(false);
         expect(deleteTask('div')).to.be.equal(false);
      });

      it('should return true if delete HTMLDivElement successfully ', function () {
         addTaskValue.value = 'first task';
         addTaskBtn.click();
         const emulatedTasks = listTask.querySelectorAll('.list-task__item');
         expect(deleteTask(emulatedTasks[0])).to.be.equal(true);
      });

      it('should return false if HTMLDivElement not contains class "list-task__item"', function () {
         const testElement = document.createElement('div');
         expect(deleteTask(testElement)).to.be.equal(false);
      });
   });

   describe('On showEditBtn', function () {
      it('should toggle class "hide-btn" if editTaskBtn is hide', function () {
         addTaskValue.value = 'first task';
         addTaskBtn.click();
         const emulatedTasks = listTask.querySelectorAll('.list-task__item');
         showEditBtn(emulatedTasks[0]);
         expect(editTaskBtn.classList.contains('hide-btn')).to.be.equal(false);
         editTaskBtn.click();
      });

      it('should return false if input data not HTMLDivElement', function () {
         expect(showEditBtn(25)).to.be.equal(false);
         expect(showEditBtn('div')).to.be.equal(false);
      });

      it('should return false if HTMLDivElement not contains class "list-task__item"', function () {
         const testElement = document.createElement('div');
         expect(showEditBtn(testElement)).to.be.equal(false);
      });
   });

   describe('On saveToLocaleStorage', function () {
      it('should save listTask in localeStorage', function () {
         listTask.append(createTaskElement('first task'));
         listTask.append(createTaskElement('second task'));
         const currentListTasks = listTask.innerHTML;
         saveToLocaleStorage();
         expect(localStorage.getItem('listTasks')).to.be.equal(currentListTasks);
      });
   });

   describe('On loadFromLocaleStorage', function () {
      it('should load listTasks from localeStorage', function () {
         const emulatedListTasks = `
            ${createTaskElement('first task')}
            ${createTaskElement('second task')}
            ${createTaskElement('third task')}
         `;
         localStorage.setItem('listTasks', emulatedListTasks);
         loadFromLocaleStorage();
         expect(listTask.innerHTML).to.be.equal(emulatedListTasks);
      });
   });
});