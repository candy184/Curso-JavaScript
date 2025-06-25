# Capítulo 7: Arrays

Este capítulo trata sobre los arrays en JavaScript, un tipo de dato fundamental. 

---

## ¿Qué es un array?
Un array es una colección ordenada de elementos. Cada elemento tiene una posición numérica llamada "índice", que empieza desde 0. Los arrays en JavaScript pueden contener datos de diferentes tipos y crecer o reducirse dinámicamente.

Ejemplo:
```js
let mixto = [1, "texto", true, [1, 2], {clave: "valor"}];
```

---

## 7.1 Crear Arrays
### Array literal
Forma más simple:
```js
let numeros = [1, 2, 3];
```

### Spread operator
Permite copiar o combinar arrays:
```js
let copia = [...numeros];
```

### Constructor `Array()`
```js
let a = new Array(3); // Array con longitud 3 pero sin valores definidos
```

### `Array.of()`
Permite crear arrays con un solo número como valor:
```js
let unico = Array.of(10); // [10]
```

### `Array.from()`
Convierte objetos similares a arrays en arrays reales:
```js
let copia = Array.from("hola"); // ['h','o','l','a']
```

---

## 7.2 Leer y escribir elementos
Se accede a los valores usando corchetes:
```js
let letras = ["a", "b"];
let primera = letras[0];
letras[1] = "c";
```

---

## 7.3 Arrays dispersos
Son arrays donde algunos índices no tienen valor definido:
```js
let disperso = [];
disperso[100] = "fin";
```

---

## 7.4 Propiedad `length`
Define la longitud del array. Se ajusta automáticamente al agregar o quitar elementos:
```js
let a = [1,2,3];
a.length = 1; // a ahora es [1]
```

---

## 7.5 Agregar y eliminar elementos
### Agregar
```js
let a = [];
a.push("uno"); // al final
a.unshift("cero"); // al inicio
```

### Eliminar
```js
a.pop();    // elimina el último
a.shift();  // elimina el primero
delete a[0]; // elimina sin ajustar length
```

---

## 7.6 Recorrer un array
### `for/of`
```js
for (let valor of a) console.log(valor);
```

### `forEach()`
```js
a.forEach(v => console.log(v));
```

### `for` clásico
```js
for (let i = 0; i < a.length; i++) console.log(a[i]);
```

---

## 7.7 Arrays multidimensionales
Son arrays dentro de arrays:
```js
let matriz = [[1,2],[3,4]];
console.log(matriz[1][0]); // 3
```

---

## 7.8 Métodos de Array
### Iteradores
- `forEach()`: recorre y aplica una función.
- `map()`: transforma cada elemento.
- `filter()`: filtra según una condición.
- `find()`, `findIndex()`: busca el primer que cumpla una condición.
- `every()`, `some()`: verifican condiciones.
- `reduce()`, `reduceRight()`: reducen a un solo valor.

### Ejemplos:
```js
let nums = [1,2,3,4];
nums.map(x => x * 2); // [2,4,6,8]
nums.filter(x => x > 2); // [3,4]
nums.reduce((a,b) => a + b); // 10
```

### flat() y flatMap()
```js
[1, [2, [3]]].flat(2); // [1,2,3]
["hola mundo"].flatMap(p => p.split(" ")); // ["hola", "mundo"]
```

### concat()
Une arrays:
```js
[1,2].concat([3,4]); // [1,2,3,4]
```

### push/pop y shift/unshift
Permiten usar el array como pila o cola.

### slice() y splice()
```js
[1,2,3].slice(1); // [2,3] (no modifica original)
[1,2,3].splice(1,1); // [2] (modifica el original)
```

### fill() y copyWithin()
```js
new Array(3).fill(0); // [0,0,0]
[1,2,3,4].copyWithin(1, 2); // [1,3,4,4]
```

### Búsqueda y ordenamiento
```js
[1,2,3].includes(2); // true
[1,2,3].indexOf(3); // 2
[3,1,2].sort(); // ordena como strings
[3,1,2].sort((a,b) => a-b); // ordena como números
```

### Conversión a string
```js
[1,2,3].join("-"); // "1-2-3"
[1,2,3].toString(); // "1,2,3"
```

### Métodos estáticos
```js
Array.isArray([]); // true
```

---

## 7.9 Objetos tipo array
Son objetos que tienen `.length` y propiedades numéricas:
```js
let parecido = {0: "a", 1: "b", length: 2};
Array.from(parecido); // ["a", "b"]
```

---

## 7.10 Cadenas como arrays
Las cadenas pueden recorrerse como si fueran arrays:
```js
let texto = "hola";
texto[0]; // 'h'
Array.prototype.join.call("hola", "-"); // "h-o-l-a"
```

---

## 7.11 Conclusión
Los arrays en JavaScript son estructuras versátiles y poderosas. Este capítulo explora desde su creación básica hasta técnicas avanzadas como `reduce`, `flatMap` o el uso de arrays como pilas y colas. Familiarizarse con los métodos de Array es esencial para escribir código eficiente y moderno.
