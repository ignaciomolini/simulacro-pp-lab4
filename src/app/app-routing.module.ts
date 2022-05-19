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
  {path:'altaPelicula', loadChildren: () => import('./pages/pelicula-alta/pelicula-alta.module').then(m=>m.PeliculaAltaModule)},

  {path:'actorPelicula', loadChildren: () => import('./pages/actor-pelicula/actor-pelicula.module').then(m=>m.ActorPeliculaModule)},

  {path:'altaActor', loadChildren: () => import('./pages/actor-alta/actor-alta.module').then(m=>m.ActorAltaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
