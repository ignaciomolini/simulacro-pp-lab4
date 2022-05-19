import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorAltaRoutingModule } from './actor-alta-routing.module';
import { ActorAltaComponent } from './actor-alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    ActorAltaComponent, TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActorAltaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActorAltaModule { }
