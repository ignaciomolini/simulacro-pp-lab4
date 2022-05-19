import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  actores: Actor[] = [];
  @Output() actorSeleccionado = new EventEmitter<Actor>();

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.traerTodosLosActores().subscribe((actores: any) => {
      this.actores = actores;
    })
  }

  enviarPais(actor: Actor){
    this.actorSeleccionado.emit(actor);
  }

}
