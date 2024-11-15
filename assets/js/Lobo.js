import Animal from './Animal.js';

export default class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {
        // Implementar el sonido específico del lobo
        console.log(`${this.getNombre()} está aullando!`);
    }
}