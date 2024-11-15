import Preview from './preview.js';
import AnimalForm from './AnimalForm.js';
import Leon from './Leon.js';
import Lobo from './Lobo.js';
import Oso from './Oso.js';
import Serpiente from './Serpiente.js';
import Aguila from './Aguila.js';

const preview = new Preview();
const animalForm = new AnimalForm();
const btnRegistrar = document.getElementById('btnRegistrar');
const tabla = document.getElementById('Animales');

// Capturar datos y crear instancia
btnRegistrar.addEventListener('click', () => {
    // Obtener los valores del formulario
    const formValues = animalForm.getValues();
    const { nombre, edad, comentarios } = formValues;

    // Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla
    if (!nombre || !edad || !comentarios) {
        alert('Por favor completa todos los campos antes de agregar el animal a la tabla.');
        return;
    }

    // Variables para almacenar la imagen y sonido
    let imagen = '';
    let sonido = '';
    let animalInstance;

    // Asigna la ruta de la imagen y sonido según el animal seleccionado
    switch (nombre) {
        case 'Leon':
            imagen = 'assets/img/Leon.png';
            sonido = 'assets/sounds/Rugido.mp3';
            animalInstance = new Leon(nombre, edad, imagen, comentarios, sonido);
            break;
        case 'Lobo':
            imagen = 'assets/img/Lobo.png';
            sonido = 'assets/sounds/Aullido.mp3';
            animalInstance = new Lobo(nombre, edad, imagen, comentarios, sonido);
            break;
        case 'Oso':
            imagen = 'assets/img/Oso.png';
            sonido = 'assets/sounds/Gruñido.mp3';
            animalInstance = new Oso(nombre, edad, imagen, comentarios, sonido);
            break;
        case 'Serpiente':
            imagen = 'assets/img/Serpiente.png';
            sonido = 'assets/sounds/Siseo.mp3';
            animalInstance = new Serpiente(nombre, edad, imagen, comentarios, sonido);
            break;
        case 'Aguila':
            imagen = 'assets/img/Aguila.png';
            sonido = 'assets/sounds/Chillido.mp3';
            animalInstance = new Aguila(nombre, edad, imagen, comentarios, sonido);
            break;
        default:
            console.error('Animal no encontrado');
            alert('El animal seleccionado no es válido. Por favor elige uno de la lista.');
            return;
    }

    // Mostrar instancia en consola (sólo para prueba)
    console.log(animalInstance);

    // Función IIFE para agregar la imagen y el botón de audio a la tabla
    (function agregarFilaTabla() {
        // Crear una nueva fila
        const fila = document.createElement('tr');

        // Crear celdas para la imagen y el botón de audio
        const celdaImagen = document.createElement('td');
        const celdaSonido = document.createElement('tr');

        // Crear imagen y añadirla a la celda
        celdaImagen.innerHTML = `<img src="${animalInstance.getImg()}" alt="${animalInstance.getNombre()}" style="width: 100px; height: auto; margin-right: 25px; cursor: pointer;">`;

        // Añadir evento click a la imagen para abrir el modal
        celdaImagen.querySelector('img').addEventListener('click', () => {
            abrirModal(animalInstance);
        });

        // Crear el botón de audio y agregarlo a la celda
        const botonAudio = document.createElement('button');
        botonAudio.classList.add('audio-button');   //Para dar estilo al botón
        botonAudio.addEventListener('click', () => {
            // Crear un elemento de audio y reproducir el sonido
            const audio = new Audio(animalInstance.getSonido());
            audio.play();
        });

        celdaSonido.appendChild(botonAudio);

        // Agregar las celdas a la fila
        fila.appendChild(celdaImagen);
        fila.appendChild(celdaSonido);

        // Agregar la fila a la tabla
        tabla.appendChild(fila);

    })();

    // Devolver el formulario en un estado inicial luego de registrar a cada animal
    preview.clear(); 
    animalForm.selectAnimal.value = ''; 
    animalForm.inputEdad.value = '';
    animalForm.textareaComentarios.value = '';
    

});

// Modal
// Obtener elementos del modal
const modal = document.getElementById('animalModal');
const modalImage = document.getElementById('modal-image');
const modalAge = document.getElementById('modal-age');
const modalComments = document.getElementById('modal-comments');
const closeButton = document.querySelector('.close-button');

// Funcion para abrir el modal
function abrirModal(animal) {
    console.log('Abriendo Modal...');
    modalImage.src = animal.getImg();
    modalImage.alt = animal.getNombre();
    modalAge.textContent = `${animal.getEdad()}`;
    modalComments.innerHTML = `Comentarios:<br>${animal.getComentarios()}`;
    modal.style.display = 'block'; // Hace visible el modal
    console.log('Modal abierto...');
}

// Evento para cerrar modal con el boton
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Esconder modal
});