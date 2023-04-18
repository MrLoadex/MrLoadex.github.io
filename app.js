// Código JavaScript (app.js)
document.getElementById('todo-button').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('todo-input');
    const taskName = input.value;
    if (taskName.trim() !== '') {
        const task = createTaskElement(taskName);
        document.getElementById('todo-list').appendChild(task);
        input.value = '';
    }
}

function createTaskElement(taskName) {
    const task = document.createElement('li');
    task.className = 'tarea';
    task.draggable = true;
    task.textContent = taskName;
    task.addEventListener('dragstart', dragStart);
    return task;
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, targetListId) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const task = document.getElementById(taskId);
    const targetList = document.getElementById(targetListId);
    targetList.appendChild(task);
}

