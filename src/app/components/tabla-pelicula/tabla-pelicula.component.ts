import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculas: Pelicula[]; 
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.peliculas)
  }

  enviarDetalles(pelicula: Pelicula){
    this.peliculaSeleccionada.emit(pelicula);
  }
}
