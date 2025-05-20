# Capítulo 4: Expresiones y Operadores en JavaScript

Este capítulo explica cómo JavaScript combina datos y realiza operaciones usando expresiones y operadores. Una expresión es cualquier fragmento de código que produce un valor. Algunas expresiones son simples, como un número o una variable. Otras son más complejas y se construyen combinando expresiones simples con operadores.

## 4.1 Expresiones Primarias

Son las más simples, no se componen de otras expresiones. Incluyen:

- **Literals (Literales):** valores escritos directamente, como:
  ```js
  3.14       // Número
  "Hola"     // Cadena de texto
  /abc/      // Expresión regular
  ```
- **Palabras clave:** como `true`, `false`, `null`, y `this`.  
  `this` se refiere al objeto actual en ciertos contextos.

- **Variables o propiedades globales:**
  ```js
  i       // Variable
  sum     // Otra variable
  undefined // Valor especial
  ```

## 4.2 Inicializadores de Objetos y Arreglos

Permiten crear nuevos objetos o listas (arreglos) fácilmente.

- **Arreglos:**
  ```js
  [1, 2, 3]             // Arreglo de 3 elementos
  [[1,2], [3,4]]        // Arreglo anidado
  [1,,5]                // Arreglo con elementos vacíos
  ```

- **Objetos:**
  ```js
  let persona = { nombre: "Ana", edad: 30 };
  let cuadrado = { arribaIzq: {x:1,y:1}, abajoDer: {x:2,y:2} };
  ```

## 4.3 Expresiones de Función

Son funciones escritas como expresiones, usadas para asignar funciones a variables.

```js
let cuadrado = function(x) { return x * x; };
```

También existen versiones más compactas llamadas funciones flecha (explicadas en capítulos posteriores).

## 4.4 Acceso a Propiedades

Permite acceder a valores dentro de objetos o arreglos:

- Notación con punto:
  ```js
  objeto.propiedad
  ```
- Notación con corchetes:
  ```js
  objeto["propiedad"]
  arreglo[0]
  ```

### 4.4.1 Acceso Condicional (Optional Chaining)

Evita errores al acceder a propiedades de objetos que podrían ser `null` o `undefined`.

```js
usuario?.direccion?.calle
```

## 4.5 Expresiones de Invocación

Son llamadas a funciones:

```js
saludar()
Math.max(1, 2, 3)
```

### 4.5.1 Invocación Condicional

Solo llama a la función si está definida:

```js
log?.(mensaje);
```

## 4.6 Expresiones de Creación de Objetos

Usan la palabra `new` para crear un nuevo objeto basado en una función constructora:

```js
let fecha = new Date();
let punto = new Point(2, 3); // Si se define un constructor llamado Point
```

## 4.7 Resumen de Operadores

JavaScript tiene muchos operadores para distintas tareas:

- **Aritméticos:** `+`, `-`, `*`, `/`, `%`, `**`  
- **Asignación:** `=`, `+=`, `-=`, etc.  
- **Comparación:** `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`  
- **Lógicos:** `&&`, `||`, `!`  
- **Bit a bit:** `&`, `|`, `^`, `<<`, `>>`, `>>>`  
- **Otros:** `typeof`, `instanceof`, `in`, `delete`

### Ejemplo:
```js
let x = 5;
x += 2;        // x ahora es 7
x > 5 && x < 10  // true
```

### Precedencia y Asociatividad

Determinan el orden en que se aplican los operadores:

```js
2 + 3 * 4     // = 2 + (3*4) = 14
(2 + 3) * 4   // = 5 * 4 = 20
```

## 4.8 Expresiones Aritméticas

```js
2 + 3       // 5
"Hola" + " Mundo"  // "Hola Mundo"
"2" + 1     // "21"
```

## 4.9 Expresiones Relacionales

```js
5 > 3           // true
"abc" < "xyz"   // true
"x" in {x: 1}   // true
d instanceof Date  // true
```

## 4.10 Expresiones Lógicas

- `&&`, `||`, `!`

```js
let nombre = usuario || "Invitado";
```

## 4.11 Expresiones de Asignación

```js
x = 10;
x += 5;
```

## 4.12 Evaluación de Código

```js
eval("2 + 2")   // Devuelve 4
```
