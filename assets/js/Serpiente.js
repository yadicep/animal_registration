import Animal from './Animal.js';

export default class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear() {
        // Implementar el sonido específico de la serpiente
        console.log(`${this.getNombre()} está siseando!`);
    }
}