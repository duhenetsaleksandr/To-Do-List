import {html} from "../__mocks__/html/html";

describe('On HTML', function () {
    beforeEach(() => {
        document.body.innerHTML = html;
    });

    it('there should be a ul tag "list-task" for todos', function () {
        expect(document.querySelectorAll('#list-task').length).toBe(1);
    });

    it('should add new task', function () {
        require('../src/scripts/app');

        document.querySelector('#add-task-value').value = 'test';
        document.querySelector('#add-task-btn').click();
        expect(document.querySelectorAll('.list-task__item').length).toBe(1);
    });
});