import Animal from './Animal.js';

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar() {
        // Implementar el sonido específico del águila
        console.log(`${this.getNombre()} está chillando!`);
    }
}