// Definición de la clase base "Mascota"
export class Mascota {
    // Propiedades de la clase base
    nombre: string;
    nivelFelicidad: number;

    // Constructor de la clase base
    constructor(nombre: string) {
        this.nombre = nombre; // Asigna el nombre proporcionado al objeto Mascota
        this.nivelFelicidad = 50; // Inicializa el nivel de felicidad en 50
    }

    // Método para alimentar a la mascota
    alimentar() {
        // Aumenta el nivel de felicidad de la mascota de manera aleatoria
        this.nivelFelicidad += Math.floor(Math.random() * 6) + 5;
        
        if (this.nivelFelicidad > 100) {
            this.nivelFelicidad = 100;
        }
        // Muestra un mensaje en la consola informando que la mascota ha sido alimentada
        console.log(`${this.nombre} ha sido alimentado. Nivel de felicidad: ${this.nivelFelicidad}`);
    }

    // Método para jugar con la mascota
    jugar() {
       
        this.nivelFelicidad += Math.floor(Math.random() * 11) + 10;
        
        if (this.nivelFelicidad > 100) {
            this.nivelFelicidad = 100;
        }
        // Muestra un mensaje en la consola informando que la mascota ha jugado
        console.log(`${this.nombre} ha jugado. Nivel de felicidad: ${this.nivelFelicidad}`);
    }

    // Método para mostrar el estado de la mascota
    estado() {
        // Muestra en la consola el nombre de la mascota y su nivel de felicidad
        console.log(`${this.nombre} - Nivel de felicidad: ${this.nivelFelicidad}`);
    }
}

// Definición de la clase "Perro" que hereda de la clase "Mascota"
class Perro extends Mascota {
    // Propiedad específica de la clase "Perro"
    raza: string;

    // Constructor de la clase "Perro"
    constructor(nombre: string, raza: string) {
        super(nombre); // Llama al constructor de la clase base "Mascota"
        this.raza = raza; // Asigna la raza proporcionada al objeto Perro
    }

    // Método para que el perro ladre
    ladrar() {
        // Muestra un mensaje en la consola indicando que el perro está ladrando
        console.log(`${this.nombre} está ladrando. ¡Guau!`);
    }

    // Método para mostrar el estado del perro (incluye la raza)
    estado() {
        super.estado(); // Llama al método "estado" de la clase base "Mascota"
        console.log(`Raza: ${this.raza}`); // Muestra la raza del perro en la consola
    }
}

// Definición de la clase "Gato" que hereda de la clase "Mascota"
class Gato extends Mascota {
    // Propiedad específica de la clase "Gato"
    color: string;

    // Constructor de la clase "Gato"
    constructor(nombre: string, color: string) {
        super(nombre); // Llama al constructor de la clase base "Mascota"
        this.color = color; // Asigna el color proporcionado al objeto Gato
    }

    // Método para que el gato maúlle
    maullar() {
        // Muestra un mensaje en la consola indicando que el gato está maullando
        console.log(`${this.nombre} está maullando. ¡Miau!`);
    }

    // Método para mostrar el estado del gato (incluye el color)
    estado() {
        super.estado(); // Llama al método "estado" de la clase base "Mascota"
        console.log(`Color: ${this.color}`); // Muestra el color del gato en la consola
    }
}

// Ejemplo de uso
const perro: Perro = new Perro("Buddy", "Golden Retriever"); // Se crea una instancia de Perro
const gato: Gato = new Gato("Whiskers", "Blanco"); // Se crea una instancia de Gato

perro.alimentar(); // Se alimenta al perro y se muestra su nivel de felicidad
perro.jugar(); // Se juega con el perro y se muestra su nivel de felicidad
perro.ladrar(); // El perro ladra y se muestra un mensaje
