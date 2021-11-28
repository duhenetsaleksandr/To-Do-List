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

    fetchTodos() {
        try {
            this.view.loaderState('run');
            this.data = [
                {
                    userId: 1,
                    id: 1,
                    title: 'delectus aut autem',
                    completed: false
                },
                {
                    userId: 1,
                    id: 2,
                    title: 'quis ut nam facilis et officia qui',
                    completed: false
                },
                {
                    userId: 1,
                    id: 3,
                    title: 'fugiat veniam minus',
                    completed: false
                },
            ];
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    addNewTask(todo) {
        try {
            this.view.loaderState('run');
            this.data.push({
                userId: 1,
                id: 201,
                ...todo
            });
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    checkedTask(id) {
        try {
            this.view.loaderState('run');
            let todo = this.data.find(todo => todo.id === id);
            todo.completed = !todo.completed;
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    deleteTask(id) {
        try {
            this.view.loaderState('run');
            let index = this.data.findIndex(todo => todo.id === id);
            this.data.splice(index, 1);
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }

    editTaskBtn(id, title) {
        try {
            this.view.loaderState('run');
            let todo = this.data.find(todo => todo.id === id);
            todo.title = title;
            this.view.renderList(this.data);
        } catch (error) {
            console.log(error);
        } finally {
            this.view.loaderState('stop');
        }
    }
}