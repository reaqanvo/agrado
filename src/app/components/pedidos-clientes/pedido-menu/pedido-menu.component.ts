import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-menu',
  templateUrl: './pedido-menu.component.html',
  styleUrls: ['./pedido-menu.component.css']
})
export class PedidoMenuComponent implements OnInit {

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
