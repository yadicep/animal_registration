export default class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    // Getters
    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    getImg(){
        return this.img;
    }
    getSonido(){
        return this.sonido;
    }
    getComentarios() {
        return this.comentarios;
    }

    // Setters
    setComentarios(comentarios){
        this.comentarios = comentarios;
    }
}
