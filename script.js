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
        const tareaElemento = document.createElement
