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
