// script.js
document.addEventListener('DOMContentLoaded', function() {
    const doItList = document.getElementById('do-it-list');
    const doingList = document.getElementById('doing-list');
    const doneList = document.getElementById('done-list');

    const doItUl = document.getElementById('do-it-ul');
    const doingUl = document.getElementById('doing-ul');
    const doneUl = document.getElementById('done-ul');

    let tasks = [];

    // Agregar tarea a la lista de Do-It
    document.getElementById('add-task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskId = 'task-' + Date.now();
            tasks.push({
                id: taskId,
                text: taskText,
                status: 'do-it'
            });
            const taskLi = createTaskLi(taskId, taskText);
            doItUl.appendChild(taskLi);
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
                if (task.status === 'do-it') {
                    task.status = 'doing';
                    doItUl.removeChild(taskLi);
                    doingUl.appendChild(taskLi);
                } else if (task.status === 'doing') {
                    task
