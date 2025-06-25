# 📦 Capítulo 10: Módulos en JavaScript

Los módulos permiten dividir el código en partes pequeñas y reutilizables, ayudando a organizar mejor los programas grandes. Esto evita que una parte del código afecte a otra por accidente, y mantiene todo más ordenado.

---

## 🔧 10.1 Módulos con Clases, Objetos y Closures

Antes de que existieran los módulos en JavaScript, los programadores usaban funciones, objetos y clases para organizar su código.

- Las **clases** ayudan a evitar conflictos porque cada clase tiene sus propios métodos. Por ejemplo, dos clases diferentes pueden tener un método llamado `has()` sin interferirse entre sí.

- Usar **objetos** también ayuda: en lugar de llenar el espacio global con variables, podemos agruparlas dentro de objetos, como `Math`.

- Para ocultar detalles del código que no queremos que otros vean (como funciones internas), usamos funciones que se ejecutan inmediatamente (IIFEs). Dentro de estas, colocamos las funciones y variables privadas, y solo mostramos lo necesario al final.

**Ejemplo:**
```js
const stats = (function() {
  const sum = (x, y) => x + y;
  const square = x => x * x;

  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(data.map(x => x - m).map(square).reduce(sum) / (data.length - 1));
  }

  return { mean, stddev };
}());

stats.mean([1, 3, 5, 7, 9]);   // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
```

---

## 🧩 10.2 Módulos en Node.js

Node permite dividir el código en archivos separados. Cada archivo es un módulo con su propio espacio privado.

### 📤 Exportar contenido
```js
exports.mean = function(data) { ... };
module.exports = class BitSet { ... };
```

### 📥 Importar contenido
```js
const stats = require('./stats.js');
const { mean } = require('./stats.js');
```

---

## 🌐 10.3 Módulos en ES6

ES6 introdujo un sistema oficial de módulos con `import` y `export`.

### 📤 Exportar
```js
export function suma(a, b) { return a + b; }
// o al final
export { suma };
export default class BitSet { ... }
```

### 📥 Importar
```js
import { suma } from './utils.js';
import BitSet from './bitset.js';
import * as utils from './utils.js';
```

---

## 🔀 Reexportar Módulos

```js
export { mean } from './stats/mean.js';
export * from './stats/stddev.js';
export { mean as promedio };
```

---

## 🖥️ Módulos en el Navegador

Para usarlos en una página web:
```html
<script type="module" src="main.js"></script>
```

---

## 📥 Importación Dinámica con `import()`

```js
import('./stats.js').then(stats => {
  console.log(stats.mean([1, 2, 3]));
});
```

O con `async/await`:
```js
async function analizar(data) {
  const stats = await import('./stats.js');
  return stats.mean(data);
}
```

---

## 🌍 `import.meta.url`

```js
function rutaLocalizada(locale) {
  return new URL(`l10n/${locale}.json`, import.meta.url);
}
```

---

## ✅ Resumen

- JavaScript ha tenido tres formas de usar módulos: con funciones, con `require()` en Node y con `import/export` en ES6.
- Los módulos ayudan a mantener el código ordenado, reutilizable y seguro.
- Hoy en día, los módulos ES6 son la forma estándar y moderna de trabajar en proyectos tanto para la web como en Node.
