// script.js
const input = document.querySelector('#input');
const btnAgregar = document.querySelector('#btnAgregar');
const lista = document.querySelector('#lista');

// Cargar tareas almacenadas en el localStorage
cargarTareas();

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
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `<i class="far fa-check-circle" data="realizado"></i>
        <span class="text">${tarea}</span>
        <i class="fas fa-trash-alt" data="eliminado"></i>`;
        lista.appendChild(tareaElemento);
        guardarTarea(tarea);
        input.value = '';
    }
}

function tareaRealizada(element) {
    element.parentNode.querySelector('.text').classList.toggle('line-through');
}

function tareaEliminada(element) {
    element.parentNode.remove();
    eliminarTarea(element.parentNode.querySelector('.text').textContent);
}

function guardarTarea(tarea) {
    const tareas = obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function obtenerTareas() {
    let tareas = localStorage.getItem('tareas');
    if (tareas) {
        return JSON.parse(tareas);
    } else {
        return [];
    }
}

function eliminarTarea(tarea) {
    const tareas = obtenerTareas();
    const index = tareas.indexOf(tarea);
    if (index !== -1) {
        tareas.splice(index, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
}

function cargarTareas() {
    const tareas = obtenerTareas();
    tareas.forEach(tarea => {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `<i class="far fa-check-circle" data="realizado"></i>
        <span class="text">${tarea}</span>
       
