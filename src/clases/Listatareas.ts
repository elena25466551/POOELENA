import { Tarea } from './Tarea'

export class Listatarea {
  private tarea : Tarea[] = []

  generarId () {
    const ids = this.tarea.map(e => e.id)

    if (!ids.length) {
      ids.push(0)
    }

    return Math.max(...ids) + 1
  }

  agregoTareas (tarea: Tarea) {
    this.tarea.push(tarea)
  }

  obtenerTareas () {
    return this.tarea
  }

  eliminarTarea (id: number) {
    this.tarea = this.tarea.filter(e => e.id !== id)
  }

  completarTarea (id: number) {
    this.tarea = this.tarea.map(e => {
      if (e.id === id) {
        e.completada = true
      }
      return e
    })
  }
}

const lista = new Listatarea()

const tarea1: Tarea = {
  id: lista.generarId(),
  nombreTarea:"Mi tarea de especialización",
  completada: true,
  date: new Date().toJSON().slice(0, 10),
}

lista.agregoTareas (tarea1)

const tarea2: Tarea = {
  id: lista.generarId(),
  nombreTarea : 'Mi tarea es programar',
  completada: false,
  date: new Date().toJSON().slice(0, 10)
}

lista.agregoTareas (tarea2)

console.log(lista.obtenerTareas())

lista.eliminarTarea(2)

console.log(lista.obtenerTareas())

lista.completarTarea(1)

console.log(lista.obtenerTareas())
