import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() peliculas: Pelicula[];

  constructor() { }

  ngOnInit(): void {
  }

}
