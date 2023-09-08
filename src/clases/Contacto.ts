// Archivo contacto.ts

// Definición de la clase "Contacto"
export class Contacto {
    private nombre: string;
    private correoElectronico: string;
    private numeroTelefono: string;

    constructor(nombre: string, correoElectronico: string, numeroTelefono: string) {
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.numeroTelefono = numeroTelefono;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerCorreoElectronico() {
        return this.correoElectronico;
    }

    obtenerNumeroTelefono() {
        return this.numeroTelefono;
    }
}
