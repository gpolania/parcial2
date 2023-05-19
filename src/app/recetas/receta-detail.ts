import { Receta } from "./receta";

export class RecetaDetail extends Receta {

  constructor(
    id: number,
    name: String,
    description: String,
    dificultad: String,
    duracion: number,
    ingredientes: String,
    categoria: String,
    img: String,
    estrellas: number,
    cantidadOpiniones: number,
    autorReceta: String,
  )
  {
    super(id, name,  description, dificultad, duracion,ingredientes, categoria, img,estrellas,cantidadOpiniones,autorReceta);



  }
}
