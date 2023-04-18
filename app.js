document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.list').forEach(list => {
    list.addEventListener('dragover', allowDrop);
    list.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd(event) {
    event.target.style.opacity = '1';
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const targetList = event.currentTarget;
    const task = document.getElementById(taskId);
    targetList.appendChild(task);
}
