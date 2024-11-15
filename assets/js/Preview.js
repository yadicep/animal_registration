export default class Preview {
    constructor() {
        // Arreglo de animales con su imagen y sonido
        this.animales = [
            { "nombre": "Leon", "imagen": "assets/img/Leon.png", "sonido": "assets/sounds/Rugido.mp3" },
            { "nombre": "Lobo", "imagen": "assets/img/Lobo.png", "sonido": "assets/sounds/Aullido.mp3" },
            { "nombre": "Oso", "imagen": "assets/img/Oso.png", "sonido": "assets/sounds/Gruñido.mp3" },
            { "nombre": "Serpiente", "imagen": "assets/img/Serpiente.png", "sonido": "assets/sounds/Siseo.mp3" },
            { "nombre": "Aguila", "imagen": "assets/img/Aguila.png", "sonido": "assets/sounds/Chillido.mp3" }
        ];

        // Obtener los elementos del DOM
        this.selectAnimal = document.getElementById('animal');
        this.previewDiv = document.getElementById('preview');

        // Asignar el evento de cambio a la selección del animal
        this.selectAnimal.addEventListener('change', (event) => this.mostrarImagen(event));

        // Para eliminar la imagen luego de hacer click con el método clear
        this.previewElement = document.getElementById('preview');
    }

    // Método para mostrar la imagen en preview
    mostrarImagen(event) {
        const selectedAnimal = event.target.value;

        // Buscar la imagen correspondiente en el arreglo
        const animal = this.animales.find(a => a.nombre === selectedAnimal);

        // Si se encuentra el animal, mostrar su imagen en el div de preview
        if (animal) {
            this.previewDiv.innerHTML = `<div style="display: flex; justify-content: center;"><img src="${animal.imagen}" alt="${animal.nombre}" style="max-height: 14em;"></div>`;
        } else {
            this.previewDiv.innerHTML = 'No se encontró la imagen del animal seleccionado';
        }
    }

    clear() {
        this.previewElement.innerHTML = '';
    }
}