// script.js
const input = document.getElementById('input');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

let LIST = [];

// Evento al hacer clic en el botón de "Agregar"
btnAgregar.addEventListener('click', () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea);
        LIST.push(tarea);
        localStorage.setItem('TODO', JSON.stringify(LIST));
    }
    input.value = '';
});

// Evento al presionar la tecla "Enter" en el input de texto
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea);
            LIST.push(tarea);
            localStorage.setItem('TODO', JSON.stringify(LIST));
        }
        input.value = '';
    }
});

// Función para agregar una tarea a la lista
function agregarTarea(tarea) {
    const elemento = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${tarea}</span>
            <div>
                <i class="fas fa-check-circle mr-2"></i>
                <i class="fas fa-trash"></i>
            </div>
        </li>
    `;
    lista.insertAdjacentHTML('beforeend', elemento);
}

// Evento al hacer clic en el ícono de "Realizado" o "Eliminar"
lista.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('fa-check-circle')) {
        element.classList.toggle('text-success');
        element.parentNode.parentNode.querySelector('span').classList.toggle('text-muted');
    } else if (element.classList.contains('fa-trash')) {
        element.parentNode.parentNode.remove();
        const tarea = element.parentNode.parentNode.querySelector('span').innerText;
        LIST = LIST.filter((item) => item !== tarea);
        localStorage.setItem('TODO', JSON.stringify(LIST));
    }
});
