// Archivo gestorDeContactos.ts
import { Contacto } from './Contacto'; // Importa la clase "Contacto" desde el archivo contacto.ts

// Definición de la clase "GestorDeContactos"
export class GestorDeContactos {
    private listaDeContactos: Contacto[] = [];

    agregarContacto(contacto: Contacto) {
        this.listaDeContactos.push(contacto);
    }

    buscarContactoPorNombre(nombre: string) {
        const contactosEncontrados = this.listaDeContactos.filter(
            (contacto) => contacto.obtenerNombre().toLowerCase() === nombre.toLowerCase()
        );
        return contactosEncontrados;
    }

    mostrarListaDeContactos() {
        console.log("Lista de contactos:");
        this.listaDeContactos.forEach((contacto, index) => {
            console.log(`Contacto ${index + 1}:`);
            console.log(`Nombre: ${contacto.obtenerNombre()}`);
            console.log(`Correo Electrónico: ${contacto.obtenerCorreoElectronico()}`);
            console.log(`Número de Teléfono: ${contacto.obtenerNumeroTelefono()}`);
            console.log("-----------------------------");
        });
    }
}
