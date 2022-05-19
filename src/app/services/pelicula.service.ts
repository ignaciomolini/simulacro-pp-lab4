import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private afs: AngularFirestore) { }

  traerTodasLasPeliculas(){
    return this.afs.collection('peliculas').valueChanges();
  }

  agregarPelicula(pelicula: Pelicula){
    return this.afs.collection('peliculas').add(pelicula);
  }
}
