// script.js
const input = document.querySelector('#input');
const btnAgregar = document.querySelector('#btnAgregar');
const listaPendientes = document.querySelector('#listaPendientes');
const listaEnProgreso = document.querySelector('#listaEnProgreso');
const listaRealizadas = document.querySelector('#listaRealizadas');

// Cargar tareas almacenadas en el localStorage
cargarTareas();

btnAgregar.addEventListener('click', agregarTarea);

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

listaPendientes.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

listaEnProgreso.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'pendiente') {
        tareaPendiente(element);
    } else if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

listaRealizadas.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'pendiente') {
        tareaPendiente(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

function agregarTarea() {
    const tarea = input.value;
    if (tarea) {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `<i class="far fa-check-circle" data="realizado"></i
