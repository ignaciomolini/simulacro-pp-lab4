import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Actor } from '../../classes/actor';
import { Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[];
  detallePelicula: Pelicula;

  constructor(private peliculaService: PeliculaService) { 
  }

  ngOnInit(): void {
   this.peliculaService.traerTodasLasPeliculas().subscribe((peliculas: any)=> {
     this.peliculas = peliculas
   })
  }

  cargarDetalle(event: Pelicula){
    this.detallePelicula = event;
  }

}
