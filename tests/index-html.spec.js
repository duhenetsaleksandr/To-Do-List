describe('On index.html', function () {
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

   it('should add one task', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      expect(listTask.childElementCount).to.be.equal(1);
   });

   it('should add two task', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      addTaskValue.value = 'second task';
      addTaskBtn.click();
      expect(listTask.childElementCount).to.be.equal(2);
   });

   it('should checked task', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      const emulatedTasks = listTask.querySelectorAll('.list-task__item');
      emulatedTasks[0].click();
      expect(emulatedTasks[0].classList.contains('checked')).to.be.equal(true);
   });

   it('should delete task', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      const emulatedTasks = listTask.querySelectorAll('.list-task__item');
      emulatedTasks[0].querySelector('.list-task__item__delete').click();
      expect(listTask.childElementCount).to.be.equal(0);
   });

   it('should edit task', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      const emulatedTasks = listTask.querySelectorAll('.list-task__item');
      emulatedTasks[0].querySelector('.list-task__item__edit').click();
      addTaskValue.value += ' edited';
      editTaskBtn.click();
      expect(emulatedTasks[0].querySelector('.list-task__item__check').innerText).to.be.equal('first task edited');
   });

   it('should save list tasks on localeStorage', function () {
      addTaskValue.value = 'first task';
      addTaskBtn.click();
      addTaskValue.value = 'second task';
      addTaskBtn.click();
      expect(listTask.innerHTML === localStorage.getItem('listTasks')).to.be.equal(true);
   });
});