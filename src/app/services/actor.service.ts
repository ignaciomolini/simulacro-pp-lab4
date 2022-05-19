import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../classes/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private afs: AngularFirestore) { }

  traerTodosLosActores(){
    return this.afs.collection('actores').valueChanges();
  }

  agregarActor(actor: Actor){
    return this.afs.collection('actores').add(actor);
  }
}
