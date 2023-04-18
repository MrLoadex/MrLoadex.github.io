// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toDoList = document.getElementById('to-do-list');
    const doingList = document.getElementById('doing-list');
    const doneList = document.getElementById('done-list');

    const toDoUl = document.getElementById('to-do-ul');
    const doingUl = document.getElementById('doing-ul');
    const doneUl = document.getElementById('done-ul');

    let tasks = [];

    // Función para crear un elemento de lista de tareas
    function createTaskLi(taskId, taskText) {
        const taskLi = document.createElement('li');
        taskLi.id = taskId;
        taskLi.textContent = taskText;
        taskLi.classList.add('task');
        return taskLi;
    }

    // Agregar tarea a la lista de To-Do
    document.getElementById('add-task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskId = 'task-' + Date.now();
            tasks.push({
                id: taskId,
                text: taskText,
                status: 'to-do'
            });
            const taskLi = createTaskLi(taskId, taskText);
            toDoUl.appendChild(taskLi);
            taskInput.value = '';
        }
    });

    // Mover tarea a la lista de Doing o Done
    document.addEventListener('click', function(event) {
        const taskLi = event.target.closest('li');
        if (taskLi && taskLi.parentElement.classList.contains('list-ul')) {
            const taskId = taskLi.id;
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                if (event.target.parentElement.id === 'to-do-ul') {
                    task.status = 'doing';
                    doingUl.appendChild(taskLi);
                } else if (event.target.parentElement.id === 'doing-ul') {
                    task.status = 'done';
                    doneUl.appendChild(taskLi);
                } else if (event.target.parentElement.id === 'done-ul') {
                    tasks = tasks.filter(t => t.id !== taskId);
                    taskLi.remove();
                }
            }
        }
    });
});
