<<<<<<< Updated upstream
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
=======
let estudiantes = [
  { nombre: "Ana", puntaje: 85 },
  { nombre: "Luis", puntaje: 92 },
  { nombre: "Marta", puntaje: 78 },
  { nombre: "Carlos", puntaje: 65 },
  { nombre: "Lucía", puntaje: 98 }
];

console.log("📝 Lista de estudiantes:");
estudiantes.forEach(est => {
  console.log(`- ${est.nombre}: ${est.puntaje} puntos`);
});

let aprobados = estudiantes.filter(est => est.puntaje >= 80);
console.log("\n✅ Estudiantes aprobados:");
aprobados.forEach(est => {
  console.log(`- ${est.nombre} (${est.puntaje})`);
});
let mejorados = estudiantes.map(est => ({
  nombre: est.nombre,
  puntaje: est.puntaje + 5
}));

console.log("\n📈 Puntajes después de mejora:");
mejorados.forEach(est => {
  console.log(`- ${est.nombre}: ${est.puntaje} puntos`);
});

let suma = estudiantes.reduce((total, est) => total + est.puntaje, 0);
let promedio = suma / estudiantes.length;
console.log(`\n📊 Promedio general: ${promedio.toFixed(2)} puntos`);

let nombresMayus = estudiantes.flatMap(est => est.nombre.toUpperCase().split(""));
console.log("\n🔠 Letras de todos los nombres en mayúsculas:", nombresMayus);

let ordenados = [...estudiantes].sort((a, b) => b.puntaje - a.puntaje);
console.log("\n🏆 Estudiantes ordenados por puntaje:");
ordenados.forEach(est => {
  console.log(`- ${est.nombre}: ${est.puntaje}`);
});
>>>>>>> Stashed changes
