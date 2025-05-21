# Capítulo 4 - Expresiones y Operadores

Este capítulo explica cómo usar expresiones y operadores en JavaScript para trabajar con valores, realizar cálculos y tomar decisiones en el código.

## ¿Qué es una expresión?
Una **expresión** es cualquier fragmento de código que genera un valor. Puede ser simple como un número o compleja como una operación matemática o lógica.

**Ejemplo:**
```javascript
3 + 4  // Devuelve 7
```

## Tipos de operadores

### 1. Operadores aritméticos
Sirven para realizar operaciones matemáticas básicas.

**Ejemplos:**
```javascript
10 + 5    // 15
10 - 3    // 7
10 * 2    // 20
10 / 2    // 5
10 % 3    // 1 (resto de la división)
```

### 2. Operadores de asignación
Asignan valores a variables y permiten modificarlos de forma abreviada.

**Ejemplo:**
```javascript
let x = 10;
x += 5;   // x ahora es 15
x *= 2;   // x ahora es 30
```

### 3. Operadores de comparación
Comparan valores y devuelven `true` o `false`.

**Ejemplos:**
```javascript
5 > 3        // true
5 < 3        // false
5 == "5"     // true (compara valor)
5 === "5"    // false (compara valor y tipo)
```

### 4. Operadores lógicos
Permiten combinar condiciones o negar valores booleanos.

**Ejemplos:**
```javascript
true && false   // false
true || false   // true
!true           // false
```

### 5. Operador de concatenación de cadenas
Une textos usando el operador `+`.

**Ejemplo:**
```javascript
"Hola" + " " + "Mundo"  // "Hola Mundo"
```

### 6. Operador condicional (ternario)
Permite decidir entre dos valores según una condición.

**Ejemplo:**
```javascript
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
// mensaje = "Mayor de edad"
```

### 7. Operadores de incremento y decremento
Aumentan o reducen el valor de una variable en 1.

**Ejemplo:**
```javascript
let n = 5;
n++;   // n ahora es 6
n--;   // n vuelve a ser 5
```

### 8. Operador `typeof`
Devuelve el tipo de dato de una variable.

**Ejemplo:**
```javascript
typeof 42         // "number"
typeof "hola"     // "string"
typeof true       // "boolean"
```

## Precedencia de operadores
JavaScript sigue un orden para evaluar operadores. Primero va la multiplicación y división, luego suma y resta. Se pueden usar paréntesis para cambiar este orden.

**Ejemplos:**
```javascript
2 + 3 * 4      // 14
(2 + 3) * 4    // 20
```

## Evaluación de expresiones
JavaScript evalúa expresiones de izquierda a derecha, y a veces detiene la evaluación si ya tiene suficiente información (evaluación corta).

**Ejemplo:**
```javascript
let resultado = true || (false && true);  // true
```

## Conclusión
Las expresiones y operadores son esenciales para escribir código útil. Entender cómo funcionan y en qué orden se aplican es clave para trabajar con lógica, cálculos y estructuras en JavaScript.
