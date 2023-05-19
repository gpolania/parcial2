export class Receta {

    id: number;
  name: String;
  description: String;
  dificultad: String;
  duracion: number;
  ingredientes: String;
  categoria: String;
  img: String;
  estrellas: number;
  cantidadOpiniones: number;
  autorReceta: String;

  public constructor(id: number, nombre: String,  description: String, dificultad: String, duracion:number,ingredientes:String,categoria: String, img:String,estrellas:number,cantidadOpiniones:number,autorReceta:String){
      this.id = id;
      this.name = nombre;
      this.description = description;
      this.dificultad = dificultad;
      this.duracion = duracion;
      this.ingredientes=ingredientes
      this.categoria = categoria;
      this.img = img;
      this.estrellas=estrellas;
      this.cantidadOpiniones=cantidadOpiniones;
      this.autorReceta=autorReceta
  }
}
