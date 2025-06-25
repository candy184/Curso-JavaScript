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
```

---

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
```

---

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
}
```

---

## 🔄 Herencia

Si una propiedad no está en el objeto, JavaScript la busca en su "modelo" o prototipo.

```js
let base = { r: 1 };
let circulo = Object.create(base);
circulo.r = 2;

console.log(base.r); // 1
```

---

## ⚠️ Errores comunes

- Si accedes a algo que no existe: `undefined`.
- Si accedes a una propiedad de algo que es `undefined` o `null`: error.

```js
let libro = {};
console.log(libro.subtitulo); // undefined
// console.log(libro.subtitulo.length); // Error

// Solución segura:
let apellido = libro?.autor?.apellido;
```

---

## ❌ Eliminar propiedades

```js
let persona = { nombre: "Ana" };
delete persona.nombre;
```

---

## ✅ Verificar si existe una propiedad

```js
"x" in obj
obj.hasOwnProperty("x")
obj.x !== undefined
```

---

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