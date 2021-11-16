const addTaskValue = document.getElementById('add-task-value');
const addTaskBtn = document.getElementById('add-task-btn');
const editTaskBtn = document.getElementById('edit-task-btn');
const listTask = document.getElementById('list-task');
let currentEditTask = null;

let globalId = -Infinity;
let tasks = [];

function Task(id, value, completed) {
   this.id = id;
   this.value = value;
   this.completed = completed;
}