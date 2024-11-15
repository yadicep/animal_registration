import Animal from './Animal.js';

export default class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir() {
        // Implementar el sonido específico del oso
        console.log(`${this.getNombre()} está gruñendo!`);
    }
}