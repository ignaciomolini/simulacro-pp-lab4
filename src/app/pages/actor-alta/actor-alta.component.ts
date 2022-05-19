import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Actor } from 'src/app/classes/actor';
import { Pais } from 'src/app/classes/pais';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  actor: Actor;
  formActor: FormGroup;

  constructor(private actorService: ActorService, private fb: FormBuilder, private toastr: ToastrService) { 
    this.actor = new Actor();
  }

  ngOnInit(): void {
    this.inicializarForm();
    this.actorService.traerTodosLosActores().subscribe(actores => {
      let id = 1;
      actores.forEach((actor: any) => {
        if(actor.id >= id){
          id = actor.id + 1;
        }
      })
      this.actor.id = id;
    })
  }

  inicializarForm(){
    this.formActor = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      fechaDeNacimiento: new FormControl('', [Validators.required]), 
      pais: new FormControl('', [Validators.required])
    });
  }

  cargarPais(event: Pais){
    //console.log(event);
    this.actor.pais = event;
    this.formActor.controls['pais'].setValue(this.actor.pais.nombre);
  }

  async guardarActor(){
    this.actor = {...this.formActor.getRawValue(), pais: this.actor.pais, id: this.actor.id}
    console.log(this.actor);
    try {
      await this.actorService.agregarActor(this.actor);
      this.toastr.success('Guardado con exito!','OK');   
    } catch (error) {
      console.log(error);
      this.toastr.error( 'Error al guardar!', 'ERROR');  
    }
  }

}
