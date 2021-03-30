class Serie {
    constructor(nombre, personajes = []) {
            this.nombre = nombre;
            this.personajes = personajes;
        }
        // Debe inyectar html para renderizar la card de personaje
    getPersonajes() {
            const templateApp = document.getElementById("app");

        }
        // this.personajes es una arreglo!
    agregarPersonajes(personaje) {
        // Si el parámetro es un objeto o un string
        this.personajes.push(personaje);
    }
}

export default Serie;