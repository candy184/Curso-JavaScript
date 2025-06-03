# Capítulo 8: Funciones en JavaScript

Las funciones son una parte esencial de JavaScript. Permiten agrupar código que puede reutilizarse varias veces. Este capítulo muestra las formas de definir e invocar funciones, cómo trabajar con argumentos, funciones anidadas, closures y más.

---

## 📌 1. ¿Qué es una función?

Una función es un bloque de código que puede ejecutarse cuando se le llama. Puede recibir datos (argumentos), usarlos y devolver un resultado. En JavaScript, las funciones también son objetos, lo que las hace muy flexibles.

---

## 🛠️ 2. Cómo definir funciones

### 🧾 2.1 Declaraciones de función

```js
function sumar(a, b) {
  return a + b;
}
```

- Se puede usar antes de que se haya definido en el código, gracias a que JavaScript las "eleva" (hoisting).
- Útiles para tareas reutilizables como calcular una distancia o imprimir propiedades.

### 🧾 2.2 Expresiones de función

```js
const cuadrado = function(x) {
  return x * x;
};
```

- Se asignan a una variable.
- No se puede usar antes de definirse.
- Pueden tener nombre (para hacer recursión).

### 🧾 2.3 Funciones flecha (arrow functions)

```js
const sumar = (a, b) => a + b;
```

- Sintaxis corta y moderna.
- No tienen su propio `this`, lo heredan del entorno donde se definieron.
- Si retornan un objeto, este debe ir entre paréntesis: `x => ({valor: x})`.

### 🧾 2.4 Funciones anidadas

```js
function hipotenusa(a, b) {
  function cuadrado(x) { return x * x; }
  return Math.sqrt(cuadrado(a) + cuadrado(b));
}
```

- Una función puede estar dentro de otra y usar sus variables.

---

## 🔁 3. Cómo invocar funciones

### 3.1 Como funciones normales

```js
sumar(2, 3);
```

- El `this` en modo estricto será `undefined`.
- En modo no estricto será el objeto global.

### 3.2 Como métodos de un objeto

```js
const calculadora = {
  a: 1,
  b: 2,
  sumar() {
    return this.a + this.b;
  }
};

calculadora.sumar(); // devuelve 3
```

- El `this` apunta al objeto.

### 3.3 Como constructoras (`new`)

```js
function Persona(nombre) {
  this.nombre = nombre;
}

const p = new Persona("Ana");
```

- Se usa para crear objetos nuevos.

### 3.4 Con `call()` y `apply()`

```js
function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

const persona = { nombre: "Mario" };
saludar.call(persona);
```

- Permite llamar una función con un `this` específico.

### 3.5 Implícitamente

Ocurre en cosas como:

- Acceder a propiedades con getters/setters.
- Concatenar objetos con `+` (usa `toString()`).
- Usar proxies o plantillas etiquetadas.

---

## 🧩 4. Argumentos y parámetros

### 4.1 Argumentos opcionales y valores por defecto

```js
function saludar(nombre = "desconocido") {
  return `Hola, ${nombre}`;
}
```

### 4.2 Parámetro rest (`...`)

```js
function max(...numeros) {
  return Math.max(...numeros);
}
```

- Permite recibir una cantidad variable de argumentos.

### 4.3 Objeto `arguments` (antiguo)

```js
function sumarTodo() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```

- Desaconsejado. Usar `...rest` es mejor.

### 4.4 Spread para llamadas

```js
const nums = [1, 2, 3];
sumar(...nums);
```

- Expande un array en valores individuales.

### 4.5 Desestructuración en argumentos

```js
function mostrar({ nombre, edad }) {
  console.log(`${nombre} tiene ${edad} años`);
}
```

- Extrae propiedades o elementos directamente al recibirlos como parámetros.

---

## 🔀 5. Las funciones como valores

```js
const operaciones = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b
};

operaciones["sumar"](1, 2); // devuelve 3
```

- Las funciones pueden guardarse en variables, objetos o arreglos.
- Pueden pasarse como argumentos a otras funciones.

---

## 📦 6. Funciones como espacios de nombres

```js
(function() {
  // Este código no afecta el ámbito global
})();
```

- Se usa para evitar contaminar el espacio global.

---

## 🧠 7. Closures (funciones con memoria)

```js
const contador = (function() {
  let n = 0;
  return function() {
    return n++;
  };
})();

contador(); // 0
contador(); // 1
```

- Una función puede “recordar” variables del lugar donde fue creada.
- Se usan para encapsular datos privados.

---

## 🛠️ 8. Propiedades y métodos de funciones

### 📏 `.length`

Número de parámetros declarados (sin contar `...rest`).

### 🧾 `.name`

Nombre de la función (útil para depurar).

### 🧬 `.prototype`

Se usa al crear objetos con `new`.

### 📞 `.call()` y `.apply()`

Permiten invocar funciones con un `this` y argumentos específicos.

### 🧲 `.bind()`

```js
const saludo = function() {
  console.log(`Hola, soy ${this.nombre}`);
}.bind({ nombre: "Carlos" });

saludo(); // Hola, soy Carlos
```

- Devuelve una nueva función con `this` fijado.

---

## ✅ Conclusión

Este capítulo muestra que las funciones son más que simples bloques de código. En JavaScript, son herramientas poderosas: pueden recordar valores, usarse como datos, encapsular lógica y hasta definir comportamientos únicos para objetos.
