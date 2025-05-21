// Ejemplo práctico de expresiones y operadores en JavaScript

// Datos de entrada
let nombre = "Juan";
let edad = 20;
let tieneLicencia = true;

// 1. Operador de comparación y lógico
let puedeConducir = (edad >= 18) && tieneLicencia;

// 2. Operador ternario para decidir mensaje
let mensaje = puedeConducir
  ? nombre + " puede conducir."
  : nombre + " NO puede conducir.";

// 3. Mostrar el resultado
console.log(mensaje);  // "Juan puede conducir."

// 4. Más operadores en acción
let a = 10;
let b = 3;

// Operadores aritméticos
console.log("Suma:", a + b);           // 13
console.log("Resta:", a - b);          // 7
console.log("Multiplicación:", a * b); // 30
console.log("División:", a / b);       // 3.333...
console.log("Módulo:", a % b);         // 1

// Operadores de asignación
a += 5;  // a ahora es 15
b *= 2;  // b ahora es 6

console.log("Nuevo valor de a:", a);
console.log("Nuevo valor de b:", b);

// Tipo de datos
console.log("Tipo de 'nombre':", typeof nombre); // "string"
console.log("Tipo de 'edad':", typeof edad);     // "number"
console.log("Tipo de 'puedeConducir':", typeof puedeConducir); // "boolean"
