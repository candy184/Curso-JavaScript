// Clase para representar números complejos
class Complex {
  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  // Suma dos números complejos
  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  // Multiplica dos números complejos
  times(that) {
    return new Complex(
      this.r * that.r - this.i * that.i,
      this.r * that.i + this.i * that.r
    );
  }

  // Getter: magnitud del número complejo
  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  // Convierte el número a texto
  toString() {
    return `{${this.r},${this.i}}`;
  }

  // Verifica si otro complejo es igual
  equals(that) {
    return that instanceof Complex && this.r === that.r && this.i === that.i;
  }

  // Métodos estáticos útiles
  static sum(c, d) {
    return c.plus(d);
  }

  static product(c, d) {
    return c.times(d);
  }
}

// Propiedades estáticas comunes
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// 💡 Ejemplo de uso
let a = new Complex(2, 3);
let b = new Complex(1, -1);

console.log("a:", a.toString());           // "{2,3}"
console.log("b:", b.toString());           // "{1,-1}"
console.log("a + b:", a.plus(b).toString()); // "{3,2}"
console.log("a * b:", a.times(b).toString()); // "{5,-1}"
console.log("¿a == b?:", a.equals(b));     // false
console.log("Magnitud de a:", a.magnitude.toFixed(2)); // 3.61
