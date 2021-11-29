import { URL } from '../constants';
import axios from 'axios';

export class ToDoModel {
    constructor(view) {
        this.view = view;
        this.data = [];
        this.fetchTodos = this.fetchTodos.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.checkedTask = this.checkedTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTaskBtn = this.editTaskBtn.bind(this);
        this.fetchTodos();
    }

    async fetchTodos() {
        try {
            this.view.loaderState('run');
            const response = await axios.get(`${URL}?_limit=5`);
            this.data = response.data;
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    async addNewTask(todo) {
        try {
            this.view.loaderState('run');
            const response = await axios.post(URL, todo);
            if (200 <= response.status && response.status < 300) {
                if (response.data.id) this.data.push(response.data);
            }
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    async checkedTask(id) {
        try {
            this.view.loaderState('run');
            let todo = this.data.find(todo => todo.id === id);
            const editTodo = {id: todo.id, title: todo.title, completed: !todo.completed};
            const response = await axios.put(`${URL}/${id}`, editTodo);
            if (200 <= response.status && response.status < 300) {
                const data = response.data;
                if (data.id) todo.completed = data.completed;
            }
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    async deleteTask(id) {
        try {
            this.view.loaderState('run');
            const response = await axios.delete(`${URL}/${id}`);
            if (200 <= response.status && response.status < 300) {
                let index = this.data.findIndex(todo => todo.id === id);
                this.data.splice(index, 1);
            }
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    async editTaskBtn(id, title) {
        try {
            this.view.loaderState('run');
            let todo = this.data.find(todo => todo.id === id);
            const editTodo = {id: todo.id, title, completed: todo.completed};
            const response = await axios.put(`${URL}/${id}`, editTodo);
            if (200 <= response.status && response.status < 300) {
                const data = response.data;
                if (data.id) todo.title = data.title;
            }
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }
}