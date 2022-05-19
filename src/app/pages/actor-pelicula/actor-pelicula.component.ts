import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  actor: Actor;
  peliculas: Pelicula[];
  peliculasActorSeleccionado: Pelicula[];

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.traerTodasLasPeliculas().subscribe((peliculas: any) => {
      this.peliculas = peliculas;
    })
  }

  cargarActor(actor: Actor){
    this.actor = actor;
    this.peliculasActorSeleccionado = this.peliculas.filter((pelicula: any) => {
      if(pelicula.actor.id == this.actor.id){
        return pelicula;
      }
    })
  }

}
