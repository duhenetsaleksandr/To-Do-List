import {html} from '../__mocks__/html/html';

jest.mock('../src/scripts/Model/Model');

describe('On HTML', function () {
    beforeAll(() => {
        document.body.innerHTML = html;
        require('../src/scripts/app');
    });

    it('there should be a ul tag "list-task" for todos', function () {
        expect(document.querySelectorAll('#list-task').length).toBe(1);
    });

    it('should render three todos in start', function () {
        expect(document.querySelectorAll('.list-task__item').length).toBe(3);
    });

    it('should add new task to end of list', function () {
        const title = 'New task in list todos';
        document.querySelector('#add-task-value').value = title;
        document.querySelector('#add-task-btn').click();
        const lastTask = document.querySelector('.list-task__item:last-child');
        expect(lastTask.firstElementChild.textContent).toBe(title);
    });

    it('should checked first task in list of todos', function () {
        const checked = document.querySelectorAll('.list-task__item')[0].classList.contains('checked');
        document.querySelectorAll('.list-task__item')[0].click();
        expect(document.querySelectorAll('.list-task__item')[0].classList.contains('checked')).toBe(!checked);
    });

    it('should delete last task in list of todos', function () {
        const lastTask = document.querySelector('.list-task__item:last-child');
        const lastTaskId = lastTask.dataset.id;
        const amountTodos = document.querySelectorAll('.list-task .list-task__item').length;
        lastTask.querySelector('.list-task__item__delete').click();
        expect(document.querySelector('.list-task__item:last-child').dataset.id).not.toBe(lastTaskId);
        expect(document.querySelectorAll('.list-task .list-task__item').length).toBe(amountTodos - 1);
    });

    it('should not to add new task if input value is empty', function () {
        const amountTasks = document.querySelectorAll('.list-task__item').length;
        document.querySelector('#add-task-value').value = '';
        document.querySelector('#add-task-btn').click();
        expect(document.querySelectorAll('.list-task__item').length).toBe(amountTasks);
    });

    it('should not to add new task if input value with empty spaces', function () {
        const amountTasks = document.querySelectorAll('.list-task__item').length;
        document.querySelector('#add-task-value').value = '   ';
        document.querySelector('#add-task-btn').click();
        expect(document.querySelectorAll('.list-task__item').length).toBe(amountTasks);
    });

    it('should edit task title', function () {
        const task = document.querySelectorAll('.list-task__item')[0];
        const taskTitle = task.firstElementChild.textContent;
        task.querySelector('.list-task__item__edit').click();
        document.querySelector('#add-task-value').value = document.querySelector('#add-task-value').value + ' test';
        document.querySelector('#edit-task-btn').click();
        expect(document.querySelectorAll('.list-task__item')[0].firstElementChild.textContent).toBe(taskTitle + ' test');
    });

    it('should not edit task if input value is empty', function () {
        const task = document.querySelectorAll('.list-task__item')[0];
        const taskTitle = task.firstElementChild.textContent;
        task.querySelector('.list-task__item__edit').click();
        document.querySelector('#add-task-value').value = '';
        document.querySelector('#edit-task-btn').click();
        expect(document.querySelectorAll('.list-task__item')[0].firstElementChild.textContent).toBe(taskTitle);
    });

    it('should not edit task if input value with empty spaces', function () {
        const task = document.querySelectorAll('.list-task__item')[0];
        const taskTitle = task.firstElementChild.textContent;
        task.querySelector('.list-task__item__edit').click();
        document.querySelector('#add-task-value').value = '   ';
        document.querySelector('#edit-task-btn').click();
        expect(document.querySelectorAll('.list-task__item')[0].firstElementChild.textContent).toBe(taskTitle);
    });

    it('should editBtn is hide default', function () {
        expect(document.querySelector('#edit-task-btn').classList.contains('hide-btn')).toBeTruthy();
    });

    it('should addTaskBtn is hide if task edit right now', function () {
        document.querySelectorAll('.list-task__item .list-task__item__edit')[0].click();
        expect(document.querySelector('#add-task-btn').classList.contains('hide-btn')).toBeTruthy();
    });

    it('should editBtn is not hide if task is edit right now', function () {
        document.querySelectorAll('.list-task__item .list-task__item__edit')[0].click();
        expect(document.querySelector('#edit-task-btn').classList.contains('hide-btn')).toBeFalsy();
    });
});