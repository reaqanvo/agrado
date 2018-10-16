import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imag-galerias',
  templateUrl: './imag-galerias.component.html',
  styleUrls: ['./imag-galerias.component.css']
})
export class ImagGaleriasComponent implements OnInit {

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
