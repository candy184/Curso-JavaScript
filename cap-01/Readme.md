# Introducción a JavaScript

JavaScript es un lenguaje de programación versátil que permite agregar interactividad y dinamismo a las páginas web. En este primer capítulo, exploramos su historia, características y aplicaciones principales.

## ¿Qué es JavaScript?
JavaScript es un lenguaje de programación interpretado que se ejecuta en los navegadores web. Su función principal es mejorar la experiencia del usuario en una página web, permitiendo la manipulación del contenido, eventos y estilos en tiempo real.

## Historia de JavaScript
Fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape. Originalmente, se llamaba **Mocha**, luego **LiveScript**, y finalmente **JavaScript**. Aunque comparte nombre con Java, son lenguajes completamente diferentes.

## Características principales
- **Interpretado**: No necesita compilación, se ejecuta directamente en el navegador.
- **Basado en eventos**: Responde a interacciones del usuario, como clics o movimientos del mouse.
- **Multiparadigma**: Soporta programación orientada a objetos, funcional y basada en eventos.
- **Compatible con todos los navegadores**: Funciona en cualquier navegador moderno sin necesidad de instalación adicional.

## Aplicaciones de JavaScript
JavaScript no solo se usa para hacer sitios web más dinámicos, sino que también tiene otras aplicaciones, como:
- Desarrollo web (HTML, CSS y JavaScript trabajan juntos).
- Aplicaciones móviles con frameworks como React Native.
- Desarrollo backend con Node.js.
- Creación de videojuegos en el navegador.

## Ejemplo básico
Aquí un ejemplo sencillo de cómo JavaScript puede modificar una página web:

```html
<!DOCTYPE html>
<html>
  <head>
      <title>Ejemplo JavaScript</title>
  </head>
  <body>
      <p id="mensaje">Hola, mundo!</p>
      <button onclick="cambiarTexto()">Haz clic</button>
  
      <script>
          function cambiarTexto() {
              document.getElementById("mensaje").innerText = "¡Texto cambiado!";
          }
      </script>
  </body>
</html>
```

En este código:
- Se muestra un mensaje inicial en un `<p>`.
- Al hacer clic en el botón, una función JavaScript cambia el texto del `<p>`.

Este es solo un vistazo a las capacidades de JavaScript. A lo largo del libro, se explorarán más aspectos en profundidad.
