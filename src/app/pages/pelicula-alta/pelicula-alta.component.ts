import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  pelicula: Pelicula;
  formPelicula: FormGroup;

  constructor(private peliculaService: PeliculaService, private fb: FormBuilder, private toastr: ToastrService) { 
    this.pelicula = new Pelicula();
  }

  ngOnInit(): void {
    this.inicializarForm();
    this.peliculaService.traerTodasLasPeliculas().subscribe(peliculas => {
      let id = 1;
      peliculas.forEach((pelicula: any) => {
        if(pelicula.id >= id){
          id = pelicula.id + 1;
        }
      })
      this.pelicula.id = id;
    })
  }

  inicializarForm(){
    this.formPelicula = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      fechaEstreno: new FormControl('', [Validators.required]),
      cantidadPublico: new FormControl('', [Validators.required]), 
      foto: new FormControl('', [Validators.required]),
      actor: new FormControl('', [Validators.required])
    });
  }

  cargarActor(event: Actor){
    this.pelicula.actor = event;
    let nombre = `${this.pelicula.actor.nombre} ${this.pelicula.actor.apellido}`;
    this.formPelicula.controls['actor'].setValue(nombre);
  }

  async guardarPelicula(){
    this.pelicula = {...this.formPelicula.getRawValue(), actor: this.pelicula.actor, id: this.pelicula.id}
    try {
      await this.peliculaService.agregarPelicula(this.pelicula);
      this.toastr.success('Guardado con exito!','OK');   
    } catch (error) {
      console.log(error);
      this.toastr.error( 'Error al guardar!', 'ERROR');  
    }
  }
}
