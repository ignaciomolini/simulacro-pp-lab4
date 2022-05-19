import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  actores: Actor[] = [];
  @Output() actorSeleccionado = new EventEmitter<Actor>()

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.traerTodosLosActores().subscribe((actores: any) => {
      this.actores = actores;
    })
  }

  enviarActor(actor: Actor){
    this.actorSeleccionado.emit(actor);
  }

}
