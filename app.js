// Código JavaScript (app.js)
document.getElementById('todo-button').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.getElementById('doing-button').addEventListener('click', addTask);
document.getElementById('doing-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.getElementById('done-button').addEventListener('click', addTask);
document.getElementById('done-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

function addTask() {
    const input = event.target.previousElementSibling;
    const task = input.value.trim();
    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.addEventListener('click', moveTask);
        input.previousElementSibling.appendChild(listItem);
        input.value = '';
    }
}

function moveTask() {
    const listId = event.target.parentNode.parentNode.id;
    const task = event.target.textContent;
    event.target.parentNode.removeChild(event.target);

    switch (listId) {
        case 'todo-list':
            document.getElementById('doing-list').appendChild(createListItem(task));
            break;
        case 'doing-list':
            document.getElementById('done-list').appendChild(createListItem(task));
            break;
        case 'done-list':
            document.getElementById('todo-list').appendChild(createListItem(task));
            break;
    }
}

function createListItem(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.addEventListener('click', moveTask);
    return listItem;
}
