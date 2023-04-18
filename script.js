// script.js

document.addEventListener('DOMContentLoaded', function() {
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

    // Cargar tareas guardadas del almacenamiento local
    function loadSavedTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            for (const task of tasks) {
                const taskLi = createTaskLi(task.id, task.text);
                if (task.status === 'to-do') {
                    toDoUl.appendChild(taskLi);
                } else if (task.status === 'doing') {
                    doingUl.appendChild(taskLi);
                } else if (task.status === 'done') {
                    doneUl.appendChild(taskLi);
                }
            }
        }
    }

    // Guardar tareas en el almacenamiento local
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Añadir una nueva tarea
    document.getElementById('add-task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskId = 'task-' + Date.now();
            const taskLi = createTaskLi(taskId, taskText);
            toDoUl.appendChild(taskLi);
            tasks.push({ id: taskId, text: taskText, status: 'to-do' });
            saveTasks();
            taskInput.value = '';
        }
    });

    // Cambiar el estado de una tarea
    function changeTaskStatus(taskId, newStatus) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.status = newStatus;
            saveTasks();
        }
    }

    // Drag and drop
    new Sortable(toDoUl, {
        group: 'tasks',
        animation: 150,
        onEnd: function(event) {
            const taskId = event.item.id;
            changeTaskStatus(taskId, 'to-do');
        }
    });

    new Sortable(doingUl, {
        group: 'tasks',
        animation: 150,
        onEnd: function(event) {
            const taskId = event.item.id;
            changeTaskStatus(taskId, 'doing');
        }
    });

    new Sortable(doneUl, {
        group: 'tasks',
        animation: 150,
        onEnd: function(event) {
            const taskId = event.item.id;
            changeTaskStatus(taskId, 'done');
        }
    });

    // Cargar tareas guardadas al cargar la página
    loadSavedTasks();
});
