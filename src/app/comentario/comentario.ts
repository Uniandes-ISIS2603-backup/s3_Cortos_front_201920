export class Comentario {
//prueba
  comentario:string;
  id:number;
  fecha:Date;

  constructor(id: number, comentario:string, fecha:Date)
    {
      this.id = id;
      this.comentario = comentario;
      this.fecha=fecha;
    }

}