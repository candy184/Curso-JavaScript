<<<<<<< HEAD
# 📘 Capítulo 6: Objetos en JavaScript

Los objetos son una de las piezas clave de JavaScript. Este capítulo explica cómo funcionan, cómo se crean y cómo se manipulan.

---

## 🔹 ¿Qué es un objeto?

Un objeto es como una caja que guarda datos. Cada dato tiene un nombre (propiedad) y un valor.

```js
let persona = {
  nombre: "Juan",
  edad: 30
};
=======
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
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## 🛠️ Cómo crear objetos

### ✅ Usando llaves `{}`

Forma más directa:

```js
let libro = {
  titulo: "JavaScript",
  autor: {
    nombre: "David",
    apellido: "Flanagan"
  }
};
```

### ✅ Usando `new`

Se utiliza con funciones especiales llamadas constructores:

```js
let fecha = new Date();
let lista = new Array();
```

### ✅ Usando `Object.create()`

Permite crear objetos con un "modelo base":

```js
let base = { x: 1 };
let copia = Object.create(base);
console.log(copia.x); // 1
=======
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
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## 🔍 Consultar y cambiar propiedades

Puedes acceder o modificar propiedades con punto o corchetes:

```js
let libro = { titulo: "JS", autor: "David" };

console.log(libro.titulo);        // "JS"
console.log(libro["autor"]);      // "David"

libro.titulo = "ECMAScript";
```

---

## 🗂️ Objetos como diccionarios

Los objetos también pueden funcionar como listas con nombres personalizados:

```js
let portafolio = {};
portafolio["IBM"] = 50;
portafolio["AAPL"] = 20;
```

### Ejemplo práctico

```js
function agregarAccion(portafolio, nombre, cantidad) {
  portafolio[nombre] = cantidad;
=======
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
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
}
```

---

<<<<<<< HEAD
## 🔄 Herencia

Si una propiedad no está en el objeto, JavaScript la busca en su "modelo" o prototipo.

```js
let base = { r: 1 };
let circulo = Object.create(base);
circulo.r = 2;

console.log(base.r); // 1
=======
## 7. Arrays de varias dimensiones

Se simulan con arrays dentro de arrays:
```js
let tabla = [
  [1, 2],
  [3, 4]
];
console.log(tabla[1][0]);  // 3
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## ⚠️ Errores comunes

- Si accedes a algo que no existe: `undefined`.
- Si accedes a una propiedad de algo que es `undefined` o `null`: error.

```js
let libro = {};
console.log(libro.subtitulo); // undefined
// console.log(libro.subtitulo.length); // Error

// Solución segura:
let apellido = libro?.autor?.apellido;
=======
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
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## ❌ Eliminar propiedades

```js
let persona = { nombre: "Ana" };
delete persona.nombre;
=======
## 9. Objetos parecidos a arrays

Son objetos con:
- Propiedad `length`
- Claves numéricas

```js
let obj = {0: "a", 1: "b", length: 2};
Array.from(obj);  // ["a", "b"]
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## ✅ Verificar si existe una propiedad

```js
"x" in obj
obj.hasOwnProperty("x")
obj.x !== undefined
=======
## 10. Las cadenas como arrays

Las strings pueden tratarse como arrays de caracteres:
```js
let palabra = "hola";
palabra[0];  // "h"
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
```

---

<<<<<<< HEAD
## 🔁 Recorrer propiedades

```js
let obj = { a: 1, b: 2 };
for (let clave in obj) {
  console.log(clave);
}
```

```js
Object.keys(obj);
Object.getOwnPropertyNames(obj);
```

---

## 🧩 Copiar propiedades

```js
let destino = {};
Object.assign(destino, { a: 1, b: 2 });
```

```js
function fusionar(obj, ...fuentes) {
  for (let f of fuentes) {
    for (let clave of Object.keys(f)) {
      if (!(clave in obj)) {
        obj[clave] = f[clave];
      }
    }
  }
  return obj;
}
```

---

## 📦 Guardar y cargar objetos

```js
let obj = { x: 1, y: [true, false] };
let texto = JSON.stringify(obj);
let nuevo = JSON.parse(texto);
```

---

📝 **Conclusión**  
Este capítulo es esencial para dominar JavaScript, ya que todo —funciones, arreglos, fechas— son objetos o están basados en ellos.
=======
## ✅ Conclusión

- Los arrays son herramientas muy potentes y flexibles en JavaScript.
- Existen muchas formas de manipularlos.
- Familiarizarte con los métodos te permitirá escribir código más limpio y eficiente.
>>>>>>> e8646880d45e9a8803600e49743788bb62f2d677
