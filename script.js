// script.js
const input = document.querySelector('#input');
const lista = document.querySelector('#lista');

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

lista.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

function agregarTarea() {
    const tarea = input.value;
    if (tarea) {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `
            <i class="far fa-circle" data="realizado"></i>
            <p class="text">${tarea}</p>
            <i class="fas fa-trash delete" data="eliminado"></i>
        `;
        lista.appendChild(tareaElemento);
        input.value = '';
    }
}

function tareaRealizada(element) {
    element.classList.toggle('fa-circle');
    element.classList.toggle('fa-check-circle');
    element.nextElementSibling.classList.toggle('line-through');
}

function tareaEliminada(element) {
    const tareaElemento = element.parentNode;
    lista.removeChild(tareaElemento);
}
