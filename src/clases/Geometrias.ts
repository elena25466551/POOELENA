import { Circulo, Figura, Cuadrado, Triangulo } from './Figuras'

export class Geometria {
  constructor (private figura: Figura) {}

  area () {
    return this.figura.obtenerArea()
  }
}

const miGeometria = new Geometria(new Cuadrado(10))
const miGeometria2 = new Geometria(new Triangulo(10, 20))
const miGeometria3 = new Geometria(new Circulo(10))

console.log(miGeometria.area())
console.log(miGeometria2.area())
console.log(miGeometria3.area())
