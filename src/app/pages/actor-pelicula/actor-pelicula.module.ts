import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorPeliculaRoutingModule } from './actor-pelicula-routing.module';
import { ActorPeliculaComponent } from './actor-pelicula.component';
import { ActorListadoComponent } from 'src/app/components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from 'src/app/components/pelicula-listado/pelicula-listado.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from 'src/app/components/detalle-actor/detalle-actor.component';


@NgModule({
  declarations: [
    ActorPeliculaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    DetallePaisComponent,
    DetalleActorComponent
  ],
  imports: [
    CommonModule,
    ActorPeliculaRoutingModule
  ]
})
export class ActorPeliculaModule { }
