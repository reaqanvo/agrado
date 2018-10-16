import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuclientes',
  templateUrl: './menuclientes.component.html',
  styleUrls: ['./menuclientes.component.css']
})
export class MenuclientesComponent implements OnInit {
  public menuAzul: string[] =
  ['MENÚ',
  'ARTÍCULOS',
  'CLIENTES',
  'ÓRDENES',
  'MATERIAS PRIMAS',
  'REGISTRO ENTRADA MAT. PRIMAS',
  'OBSERVACIONES TÉCNICAS',
  'EVACUACIÓN',
  'FICHA PRODUCTO',
  'MANTENIMIENTO',
  'CONTROL CALIDAD',
  'PLANIFICACIÓN MÁQUINAS',
  'MANTENIMIENTO APLICACIÓN'
];
  constructor() { }

  ngOnInit() {
  }

}
