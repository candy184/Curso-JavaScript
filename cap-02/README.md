# Fundamentos de JavaScript

En este capítulo se exploran los conceptos básicos de JavaScript, incluyendo su sintaxis, variables, tipos de datos y estructuras fundamentales.

## Sintaxis básica
JavaScript utiliza una sintaxis simple y flexible. Cada instrucción suele terminar con un punto y coma `;`, aunque no es obligatorio. Se pueden escribir comentarios de una sola línea con `//` y comentarios de múltiples líneas con `/* */`.

## Variables en JavaScript
Las variables son espacios en memoria donde se almacenan datos. En JavaScript, se pueden declarar usando:

- `var`: Forma antigua, no recomendada.
- `let`: Permite reasignación de valores.
- `const`: Para valores constantes que no cambian.

Ejemplo:
```javascript
let nombre = "Juan";
const edad = 25;
var ciudad = "Madrid"; // No recomendado
```

## Tipos de datos
JavaScript tiene varios tipos de datos primitivos:
- **String**: Cadenas de texto (`"Hola"`)
- **Number**: Números (`42`, `3.14`)
- **Boolean**: Verdadero o falso (`true`, `false`)
- **Undefined**: Variable declarada sin valor
- **Null**: Ausencia intencionada de valor

Ejemplo:
```javascript
let mensaje = "Hola, mundo"; // String
let numero = 10; // Number
let activo = true; // Boolean
```

## Conversión de tipos
Es posible convertir datos de un tipo a otro de forma explícita o implícita.

Ejemplo:
```javascript
let num = "5";
let suma = Number(num) + 10; // Conversión explícita a número
console.log(suma); // 15
```

## Operadores básicos
JavaScript tiene operadores matemáticos y lógicos fundamentales:

- Aritméticos: `+`, `-`, `*`, `/`, `%`
- Comparación: `==`, `===`, `!=`, `<`, `>`
- Lógicos: `&&`, `||`, `!`

Ejemplo:
```javascript
console.log(5 + 3); // 8
console.log(10 > 5); // true
console.log(true && false); // false
```

## Estructuras de control
Para tomar decisiones y repetir acciones, JavaScript usa estructuras como:

### Condicionales (`if`, `else`, `switch`)
```javascript
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

### Bucles (`for`, `while`)
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
