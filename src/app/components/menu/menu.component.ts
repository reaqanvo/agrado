import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
