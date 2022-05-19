import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from '../../classes/pais';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  paises: Pais[] = [];
  @Output() paisSeleccionado = new EventEmitter<Pais>();

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.obtenerTodosLosPaises().subscribe((paises: any) => {
      this.paises = paises.map((auxPais: any) => {
        let capital = auxPais.capital;
        if(capital == undefined){
          capital = [];
        }
        return {nombre: auxPais.name.common, bandera: auxPais.flags.svg, capital: capital[0], region: auxPais.region, poblacion: auxPais.population};
      }).sort(()=> Math.random() - 0.5).slice(0, 10); 
    })
  }

  enviarPais(pais: Pais){
    this.paisSeleccionado.emit(pais);
  }

}
