export default class AnimalForm {
    constructor() {
        // Obtener los elementos del formulario
        this.selectAnimal = document.getElementById('animal');
        this.inputEdad = document.getElementById('edad');
        this.textareaComentarios = document.getElementById('comentarios');

        // Método para obtener los valores del formulario
        this.getValues = this.getValues.bind(this);
    }

    // Método para obtener los valores de los inputs
    getValues() {
        const nombreAnimal = this.selectAnimal.value; // Nombre del animal seleccionado
        const edadAnimal = this.inputEdad.value; // Edad seleccionada
        const comentarios = this.textareaComentarios.value; // Comentarios ingresados

        // Retornar un objeto con los valores
        return {
            nombre: nombreAnimal,
            edad: edadAnimal,
            comentarios: comentarios
        };
    }
}