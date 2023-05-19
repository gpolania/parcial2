import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../receta.service';
import { RecetaDetail } from '../receta-detail';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas:  Array<RecetaDetail> = [];

  selectedReceta!: RecetaDetail;

  selected: boolean=false;

  onSelected(receta: RecetaDetail): void {

    this.selected = true;

    this.selectedReceta = receta;

    }
    promedio: number = 0;
  constructor(private recetaService:RecetaService) { }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }
  getCalificacion(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
      this.promedio = 0;
      recetas.forEach(receta => {
        this.promedio+=Number(receta.estrellas);
      })

      this.promedio/=recetas.length;


    });
  }

  ngOnInit() {

    this.getRecetas();
    this.getCalificacion();
  }

}
