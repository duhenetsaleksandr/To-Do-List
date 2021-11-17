const addTaskValue = document.getElementById('add-task-value');
const addTaskBtn = document.getElementById('add-task-btn');
const editTaskBtn = document.getElementById('edit-task-btn');
const listTask = document.getElementById('list-task');
let currentEditTask = null;
let globalId = -Infinity;

const URLGet = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
const URL = 'https://jsonplaceholder.typicode.com/todos';