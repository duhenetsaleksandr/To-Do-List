export class ToDoView {
    constructor(controller) {
        this.controller = controller;
        this.currentEditTask = null;
        this.elements = {
            form: document.getElementById('add-task'),
            input: document.getElementById('add-task-value'),
            addTaskBtn: document.getElementById('add-task-btn'),
            editTaskBtn: document.getElementById('edit-task-btn'),
            listTask: document.getElementById('list-task'),
            templateTodo: document.getElementById('templateTodo').innerHTML,
            body: document.querySelector('body'),
        }

        this.loaderState = this.loaderState.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderTask = this.renderTask.bind(this);
        this.getNewTodoElement = this.getNewTodoElement.bind(this);
        this.showEditBtn = this.showEditBtn.bind(this);

        this.elements.form.addEventListener('submit', this.controller.submit);
        this.elements.listTask.addEventListener('click', this.controller.actionTodo);
    }

    showEditBtn(element) {
        element = element.parentNode;
        this.elements.input.value = element.querySelector('.list-task__item__check').textContent;
        this.currentEditTask = element;
        this.elements.input.focus();
        if (this.elements.editTaskBtn.classList.contains('hide-btn')) this.toggleBtn();
    }

    toggleBtn() {
        this.elements.addTaskBtn.classList.toggle('hide-btn');
        this.elements.editTaskBtn.classList.toggle('hide-btn');
    }

    loaderState(state) {
        if (state === 'run') {
            this.elements.body.classList.add('loader');
        } else if (state === 'stop') {
            this.elements.body.classList.remove('loader');
        }
    }

    renderList(data) {
        this.elements.listTask. innerHTML = '';
        data.forEach(this.renderTask);
        this.elements.input.focus();
    }

    renderTask({id, title, completed} = {}) {
        this.elements.listTask.append(this.getNewTodoElement(id, title, completed));
    }

    getNewTodoElement(todoId, todoTitle, completed) {
        const html = this.elements.templateTodo
            .replace('{{todo-id}}', todoId)
            .replace('{{todo-title}}', todoTitle);
        const todo = this.htmlToElement(html);
        if (completed) todo.classList.add('checked');
        return todo;
    }

    htmlToElement(html) {
        const template = document.createElement("template");
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
}