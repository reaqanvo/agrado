import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-side-bar2',
  templateUrl: './articulos-side-bar2.component.html',
  styleUrls: ['./articulos-side-bar2.component.css']
})
export class ArticulosSideBar2Component implements OnInit {
  limpiarlo = true;
  constructor() { }

  ngOnInit() {
  }
  limpiar()  {
    this.limpiarlo = false;
  }

}
