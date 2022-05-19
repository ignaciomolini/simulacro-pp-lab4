import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';


const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent
  },
  {
    path: 'busqueda',
    component: BusquedaComponent
  },
  {
    path: 'altaActor',
    component: ActorAltaComponent
  },
  {
    path: 'altaPelicula',
    component: PeliculaAltaComponent
  },
  {
    path: 'actorPelicula',
    component: ActorPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
