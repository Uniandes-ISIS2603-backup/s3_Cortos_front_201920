export class Cineasta { //AUN NO SE HA TENIDO EN CUENTA EL TIPO DE CINEASTA (PREGUNTAR COMO MANEJO EL ENUM)

    /**
     * Id del cineasta.
     */
    id: number;

    /**
     * Ruta de la imagen de perfil del cineasta.
     */
    imagen: string;//PREGUNTAR

    /**
     * Nombre del cineasta.
     */
    nombre: string;

    /**
     * Correo del cineasta.
     */
    correo: string;

    /**
     * Contrasenia asociada al correo del cineasta
     */
    contrasenia: string;

    /**
     * Fecha de nacimiento del cineasta.
     */
    fechaNacimiento: any;

    /**
     * Telefono del cineasta.
     */
    telefono: string;

    /**
     * Dirección del cineasta.
     */
    direccion: string;

    /**
     * Género del cineasta{true= hombre, false= mujer}
     */
    genero: boolean;

}
