import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaAltaRoutingModule } from './pelicula-alta-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from 'src/app/components/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    PeliculaAltaComponent, TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculaAltaRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeliculaAltaModule { }
