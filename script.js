// script.js
const input = document.querySelector('#input');
const btnAgregar = document.querySelector('#btnAgregar');
const lista = document.querySelector('#lista');

btnAgregar.addEventListener('click', agregarTarea);
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
        const id = Date.now();
        const realizado = false;
        const eliminado = false;
        const tareaElemento = `
            <li>
                <i class="far fa-circle" data="realizado" id="${id}"></i>
                <p class="text">${tarea}</p>
                <i class="fas fa-trash" data="eliminado" id="${id}"></i>
            </li>
        `;
        lista.insertAdjacentHTML('beforeend', tareaElemento);
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
