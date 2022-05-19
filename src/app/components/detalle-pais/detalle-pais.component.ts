import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/classes/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() detallePais: Pais;

  constructor() { }

  ngOnInit(): void {
    console.log(this.detallePais);
  }

}
