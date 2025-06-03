# Capítulo 7: Arrays en JavaScript

Los arrays en JavaScript son listas ordenadas de valores. Son muy flexibles y permiten almacenar distintos tipos de datos, incluyendo otros arrays u objetos. Este capítulo enseña cómo crearlos, usarlos, modificarlos y aprovechar todos sus métodos.

---

## 1. Cómo crear arrays

### 🔹 Literales
La forma más común: usar corchetes `[]` con los valores separados por comas.
```js
let numeros = [1, 2, 3];
let mixto = [1, "hola", true];
```
También se pueden anidar:
```js
let datos = [[1, 2], ["a", "b"]];
```

### 🔹 Operador Spread (`...`)
Permite insertar los elementos de otro array dentro de uno nuevo:
```js
let a = [1, 2];
let b = [0, ...a, 3];  // [0, 1, 2, 3]
```

### 🔹 Constructor `Array()`
Tres usos:
```js
new Array();          // Array vacío
new Array(3);         // Array de longitud 3, sin valores
new Array(1, 2, 3);   // Array con esos valores
```

### 🔹 `Array.of()` y `Array.from()`
- `Array.of(5)` → `[5]`
- `Array.from("hola")` → `["h", "o", "l", "a"]`

---

## 2. Leer y escribir en arrays

Puedes acceder y modificar elementos usando corchetes:
```js
let a = ["uno"];
a[1] = "dos";  // Añade nuevo valor
let valor = a[0];  // Lee valor
```
Los índices no necesitan ser consecutivos, lo que lleva a arrays dispersos.

---

## 3. Arrays dispersos

Un array disperso tiene "huecos", es decir, índices sin valor asignado.
```js
let a = [];
a[100] = "final";  // a.length ahora es 101
```
Importante: esos huecos no están definidos y no se cuentan como elementos.

---

## 4. Propiedad `length`

Indica cuántos elementos puede tener un array, pero puede ser mayor que la cantidad real de elementos:
```js
let a = [1, 2];
a.length;        // 2
a.length = 1;    // Elimina elementos desde el índice 1 en adelante
```

---

## 5. Agregar y eliminar elementos

### 🔹 Agregar
```js
a.push("nuevo");    // Al final
a.unshift("inicio"); // Al principio
```

### 🔹 Eliminar
```js
a.pop();    // Último elemento
a.shift();  // Primer elemento
delete a[1]; // Elimina sin cambiar `length`
```

---

## 6. Recorrer arrays

### 🔹 `for/of`
```js
for (let item of array) {
  console.log(item);
}
```

### 🔹 `forEach()`
```js
array.forEach(item => console.log(item));
```

### 🔹 `for` clásico
Ideal si necesitas usar el índice:
```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

---

## 7. Arrays de varias dimensiones

Se simulan con arrays dentro de arrays:
```js
let tabla = [
  [1, 2],
  [3, 4]
];
console.log(tabla[1][0]);  // 3
```

---

## 8. Métodos útiles de arrays

### 🔹 Iteradores

- `forEach()` → recorre todos los elementos.
- `map()` → transforma cada elemento.
```js
[1, 2, 3].map(x => x * 2);  // [2, 4, 6]
```
- `filter()` → selecciona elementos que cumplen una condición.
```js
[1, 2, 3].filter(x => x > 1);  // [2, 3]
```
- `find()` y `findIndex()` → devuelven el primer valor o índice que cumple una condición.
- `some()` y `every()` → verifican si algún o todos los elementos cumplen cierta condición.
- `reduce()` → combina todos los elementos en uno solo.
```js
[1, 2, 3].reduce((a, b) => a + b);  // 6
```

### 🔹 Aplanar arrays
```js
[1, [2, 3]].flat();  // [1, 2, 3]
```
```js
["hola mundo"].flatMap(p => p.split(" "));  // ["hola", "mundo"]
```

### 🔹 Concatenar arrays
```js
[1, 2].concat([3, 4]);  // [1, 2, 3, 4]
```

### 🔹 Subarrays
- `slice()` → copia una parte.
- `splice()` → elimina e inserta elementos.
- `fill()` → llena con un valor.
- `copyWithin()` → copia dentro del mismo array.

### 🔹 Buscar y ordenar
- `indexOf()`, `lastIndexOf()`, `includes()`
- `sort()` → ordena (alfabéticamente por defecto).
- `reverse()` → invierte el orden.

### 🔹 Convertir en string
```js
[1, 2, 3].join("-");  // "1-2-3"
[1, 2].toString();    // "1,2"
```

---

## 9. Objetos parecidos a arrays

Son objetos con:
- Propiedad `length`
- Claves numéricas

```js
let obj = {0: "a", 1: "b", length: 2};
Array.from(obj);  // ["a", "b"]
```

---

## 10. Las cadenas como arrays

Las strings pueden tratarse como arrays de caracteres:
```js
let palabra = "hola";
palabra[0];  // "h"
```

---

## ✅ Conclusión

- Los arrays son herramientas muy potentes y flexibles en JavaScript.
- Existen muchas formas de manipularlos.
- Familiarizarte con los métodos te permitirá escribir código más limpio y eficiente.
