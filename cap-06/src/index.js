let persona = {
    nombre: "Ana",
    apellido: "Martínez",
    edad: 30,

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(valor) {
        const partes = valor.split(" ");
        this.nombre = partes[0];
        this.apellido = partes[1];
    },

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log(persona.saludar());              
console.log(persona.nombreCompleto);         
persona.nombreCompleto = "Luis Gómez";
console.log(persona.nombre);                
console.log(persona.apellido);               

// Creamos un objeto que hereda de persona
let estudiante = Object.create(persona);
estudiante.curso = "Matemáticas";

console.log(estudiante.nombreCompleto);      
console.log(estudiante.curso);               

let infoExtra = { universidad: "UNAM", graduado: false };
Object.assign(estudiante, infoExtra);
console.log(estudiante.universidad);         

for (let prop in estudiante) {
    if (estudiante.hasOwnProperty(prop)) {
        console.log(`Propiedad propia: ${prop}`);
    }
}
