import {Libro} from "./Libro"

export class Biblioteca {
    private librosDisponibles: Libro[] = [];
    private librosPrestados: Libro[] = [];
  
    agregarLibro(libro: Libro) {
      if (!this.librosDisponibles.includes(libro)) {
        this.librosDisponibles.push(libro);
        return `El libro '${libro.titulo}' ha sido agregado a la biblioteca.`;
      } else {
        return `El libro '${libro.titulo}' ya existe en la biblioteca.`;
      }
    }
  
    buscarLibroDisponible(titulo: string) {
      const libroEncontrado = this.librosDisponibles.find(libro => libro.titulo === titulo);
      return libroEncontrado || null; // Devuelve el libro o null si no se encuentra
    }
  
    buscarLibroPrestado(titulo: string) {
      const libroEncontrado = this.librosPrestados.find(libro => libro.titulo === titulo);
      return libroEncontrado || null; // Devuelve el libro o null si no se encuentra
    }
  
    prestarLibro(titulo: string) {
      const libro = this.buscarLibroDisponible(titulo);
      if (libro) {
        this.librosDisponibles = this.librosDisponibles.filter(lib => lib !== libro);
        this.librosPrestados.push(libro);
        return `El libro '${titulo}' ha sido prestado.`;
      } else {
        return `El libro '${titulo}' no está disponible para préstamo.`;
      }
    }
  
    devolverLibro(titulo: string) {
      const libro = this.buscarLibroPrestado(titulo);
      if (libro) {
        this.librosPrestados = this.librosPrestados.filter(lib => lib !== libro);
        this.librosDisponibles.push(libro);
        return `El libro '${titulo}' ha sido devuelto con éxito.`;
      } else {
        return `El libro '${titulo}' no está en la lista de libros prestados.`;
      }
    }
  
    listarLibrosDisponibles() {
      return this.librosDisponibles.map(libro => libro.titulo);
    }
  
    listarLibrosPrestados() {
      return this.librosPrestados.map(libro => libro.titulo);
    }
  }
  
  // Ejemplo de uso
  const biblioteca = new Biblioteca();
  const libro1 = new Libro("El Hobbit", "J.R.R. Tolkien");
  const libro2 = new Libro("1984", "George Orwell");
  
  console.log(biblioteca.agregarLibro(libro1));
  console.log(biblioteca.agregarLibro(libro2));
  
  console.log(biblioteca.prestarLibro("El Hobbit"));
  console.log(biblioteca.listarLibrosDisponibles());
  
  console.log(biblioteca.devolverLibro("El Hobbit"));
  console.log(biblioteca.listarLibrosPrestados());
