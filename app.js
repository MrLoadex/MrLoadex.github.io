// Código JavaScript (app.js)
document.getElementById('todo-button').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.getElementById('todo-list').addEventListener('click', function(event) {
    moveTask(event, 'doing-list');
});

document.getElementById('doing-list').addEventListener('click', function(event) {
    moveTask(event, 'done-list');
});

document.getElementById('done-list').addEventListener('click', function(event) {
    moveTask(event, 'todo-list');
});

function addTask() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        document.getElementById('todo-list').appendChild(listItem);
        input.value = '';
    }
}

function moveTask(event, targetListId) {
    const task = event.target.textContent;
    event.target.parentNode.removeChild(event.target);

    const listItem = document.createElement('li');
    listItem.textContent = task;

    switch (targetListId) {
        case 'doing-list':
            document.getElementById('doing-list').appendChild(listItem);
            break;
        case 'done-list':
            document.getElementById('done-list').appendChild(listItem);
            break;
        case 'todo-list':
            document.getElementById('todo-list').appendChild(listItem);
            break;
    }
}
