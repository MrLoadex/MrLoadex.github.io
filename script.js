// script.js
const input = document.querySelector('#input');
const btnAgregar = document.querySelector('#btnAgregar');
const listaToDo = document.querySelector('#listaToDo');
const listaDoing = document.querySelector('#listaDoing');
const listaDoIt = document.querySelector('#listaDoIt');

// Cargar tareas almacenadas en el localStorage
cargarTareas();

btnAgregar.addEventListener('click', agregarTarea);

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

listaToDo.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'doing') {
        tareaDoing(element);
    } else if (elementData === 'doit') {
        tareaDoIt(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

listaDoing.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'todo') {
        tareaToDo(element);
    } else if (elementData === 'doit') {
        tareaDoIt(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

listaDoIt.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'todo') {
        tareaToDo(element);
    } else if (elementData === 'doing') {
        tareaDoing(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

function agregarTarea() {
    const tarea = input.value;
    if (tarea) {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `<i class="far fa-check-circle" data="doing"></i> ${tarea}<i class="far fa-trash-alt" data="eliminado"></i>`;
        listaDoIt.appendChild(tareaElemento);
        input.value = '';
        guardarTarea(t
