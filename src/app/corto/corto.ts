export class Corto{
    id: number;
    nombre : string;
    descripcion : string;
    fechaPublicacion : Date;
    precio : number;
    constructor(id: number, nombre :string, descripcion : string, precio: number ){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}