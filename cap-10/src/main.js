import { mean, stddev } from './stats.js';

const datos = [2, 4, 6, 8, 10];

console.log("Datos:", datos);
console.log("Promedio:", mean(datos));
console.log("Desviación estándar:", stddev(datos));
