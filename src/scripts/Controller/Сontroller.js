import { ToDoModel } from "../Model/Model";
import { ToDoView } from "../View/View";

export class ToDoController {
    constructor() {
        this.submit = this.submit.bind(this);
        this.actionTodo = this.actionTodo.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.editTaskBtn = this.editTaskBtn.bind(this);

        this.view = new ToDoView(this);
        this.model = new ToDoModel(this.view);
    }

    submit(event) {
        event.preventDefault();
        if (!this.view.elements.addTaskBtn.classList.contains('hide-btn')) this.addNewTask()
        else if (!this.view.elements.editTaskBtn.classList.contains('hide-btn')) this.editTaskBtn();
    }

    editTaskBtn() {
        const title = this.view.elements.input.value.trim();
        if (title.length !== 0) {
            const todoId = Number(this.view.currentEditTask.dataset.id);
            this.view.elements.input.value = '';
            this.model.editTaskBtn(todoId, title);
        }
        this.view.currentEditTask = null;
        this.view.toggleBtn();
    }

    addNewTask() {
        const title = this.view.elements.input.value.trim();
        if (title.length === 0) return;
        const todo = { title, completed: false };
        this.view.elements.input.value = '';
        this.model.addNewTask(todo);
    }

    actionTodo(event) {
        let element = event.target;
        if (element.classList.contains('list-task__item__delete')) {
            const todoId = Number(element.parentNode.dataset.id);
            this.model.deleteTask(todoId);
            return;
        } else if (element.classList.contains('list-task__item__edit')) {
            this.view.showEditBtn(element);
            return;
        }
        element = element.classList.contains('list-task__item') ? element : element.parentNode;
        if (!element.classList.contains('list-task__item')) return;
        const todoId = Number(element.dataset.id);
        this.model.checkedTask(todoId);
    }
}