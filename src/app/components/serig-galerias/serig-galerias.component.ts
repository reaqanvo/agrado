import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serig-galerias',
  templateUrl: './serig-galerias.component.html',
  styleUrls: ['./serig-galerias.component.css']
})
export class SerigGaleriasComponent implements OnInit {

  items: string[] = [
    'rojo',
    'azul',
    'verde',
    'blanco',
    'negro',
    'amarillo',
    'rojo',
    'azul',
    'verde',
    'blanco'
  ]

  constructor() { }

  ngOnInit() {
  }

}
