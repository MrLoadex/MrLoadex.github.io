// Obtener referencias a las listas
const todoList = document.getElementById('todo-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');

// Obtener referencias a los elementos de entrada de texto
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// Agregar evento click al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);

// Agregar evento de tecla presionada en el input de tarea
taskInput.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

// Función para agregar una tarea a la lista de To-Do
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === '') {
        return;
    }

    const taskElement = createTaskElement(taskText);
    todoList.appendChild(taskElement);

    taskInput.value = '';
}

// Función para crear un elemento de tarea
function createTaskElement(taskText) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.textContent = taskText;
    taskElement.draggable = true;
    taskElement.addEventListener('dragstart', dragStartHandler);
    taskElement.addEventListener('dragend', dragEndHandler);
    return taskElement;
}

// Funciones para el manejo de arrastrar y soltar

let draggedTask = null;

function dragStartHandler(event) {
    draggedTask = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', event.target.textContent);
    this.classList.add('dragged');
}

function dragEndHandler(event) {
    draggedTask = null;
    this.classList.remove('dragged');
}

todoList.addEventListener('dragover', dragOverHandler);
todoList.addEventListener('drop', dropHandler);
doingList.addEventListener('dragover', dragOverHandler);
doingList.addEventListener('drop', dropHandler);
doneList.addEventListener('dragover', dragOverHandler);
doneList.addEventListener('drop', dropHandler);

function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function dropHandler(event) {
    event.preventDefault();
    const taskText = event.dataTransfer.getData('text/plain');
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.textContent = taskText;
    taskElement.draggable = true;
    taskElement.addEventListener('dragstart', dragStartHandler);
    taskElement.addEventListener('dragend', dragEndHandler);
    this.appendChild(taskElement);
    if (draggedTask !== null) {
        draggedTask.remove();
    }
}
