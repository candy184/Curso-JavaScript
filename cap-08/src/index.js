function crearContador(nombre) {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(`${nombre}: ${contador}`);
  }

  return incrementar; 
}

const clicks = crearContador("Click");
const vistas = crearContador("Vista");

clicks(); // Click: 1
clicks(); // Click: 2
vistas(); // Vista: 1
clicks(); // Click: 3
