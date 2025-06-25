# Capítulo 9: Clases

En este capítulo se explica el uso de las las **clases** en JavaScript, una forma moderna y organizada de crear objetos con estructuras definidas. Aunque JavaScript no tiene clases como otros lenguajes orientados a objetos, ofrece una sintaxis que permite trabajar con ellas desde ES6 (2015).

---

## ¿Qué es una clase?
Una clase es una plantilla para crear objetos. En JavaScript, es una forma más clara de definir constructores y prototipos. Permite agrupar datos (propiedades) y funciones (métodos) relacionadas.

---

## 9.1 Declaración de clases
Las clases se definen con la palabra clave `class`. Dentro de la clase se incluye un **constructor** y uno o más **métodos**.

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

let p = new Persona("Ana");
p.saludar();
```

---

## 9.2 Expresiones de clase
Tambien se pueden definir clases como expresiones (no llevan nombre obligatorio):

```js
const Animal = class {
  constructor(tipo) {
    this.tipo = tipo;
  }
};
```

---

## 9.3 Herencia
Una clase puede **heredar** de otra con `extends`. Se usa `super()` para llamar al constructor de la clase base.

```js
class Estudiante extends Persona {
  constructor(nombre, grado) {
    super(nombre);
    this.grado = grado;
  }

  info() {
    return `${this.nombre} está en grado ${this.grado}`;
  }
}
```

---

## 9.4 Métodos estáticos
Son funciones que pertenecen a la clase en sí, no a sus objetos. Se usan con la palabra `static`.

```js
class Matematica {
  static suma(a, b) {
    return a + b;
  }
}

console.log(Matematica.suma(2, 3)); // 5
```

---

## 9.5 Getters, setters y otras palabras clave
- `get` permite definir una propiedad que se calcula.
- `set` permite definir una acción al modificar un valor.

```js
class Cuadro {
  constructor(lado) {
    this.lado = lado;
  }
  get area() {
    return this.lado ** 2;
  }
}
```

---

## 9.6 Clase Complex (ejemplo)
El capítulo muestra una clase para manejar números complejos con métodos para sumar, multiplicar, convertir a texto y comparar:

```js
class Complex {
  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  toString() {
    return `{${this.r},${this.i}}`;
  }
}
```

Esta clase también incluye `get` para calcular la magnitud y métodos estáticos como `sum()` y `product()`.

---

## 9.7 Clase como tipo
Las clases permiten crear tipos personalizados. Se puede usar `instanceof` para comprobar si un objeto pertenece a una clase.

```js
p instanceof Persona; // true
```

---

## Conclusión
Las clases hacen que el código sea más claro, organizado y reutilizable. Aunque internamente JavaScript sigue funcionando con prototipos, la sintaxis de clase es una forma moderna y eficiente de definir objetos, herencias y comportamientos complejos.
