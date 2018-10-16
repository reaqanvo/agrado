import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosSidebarComponent } from './components/articulos/articulos-sidebar/articulos-sidebar.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticulosSideBar2Component } from './components/articulos/articulos-side-bar2/articulos-side-bar2.component';
import { ArticulosPpalComponent } from './components/articulos-ppal/articulos-ppal.component';
import { ImagGaleriasComponent } from './components/imag-galerias/imag-galerias.component';
import { MenuGaleriasComponent } from './components/imag-galerias/menu-galerias/menu-galerias.component';
import { ImagenesPpalComponent } from './components/imag-galerias/imagenes-ppal/imagenes-ppal.component';
import { SerigGaleriasComponent } from './components/serig-galerias/serig-galerias.component';
import { SerigPpalComponent } from './components/serig-galerias/serig-ppal/serig-ppal.component';
import { MenuserigComponent } from './components/serig-galerias/menuserig/menuserig.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesPpalComponent } from './components/clientes/clientes-ppal/clientes-ppal.component';
import { MenuclientesComponent } from './components/clientes/menuclientes/menuclientes.component';
import { HeaderClientesComponent } from './components/clientes/header-clientes/header-clientes.component';
import { PedidosClientesComponent } from './components/pedidos-clientes/pedidos-clientes.component';
import { PedidoPpalComponent } from './components/pedidos-clientes/pedido-ppal/pedido-ppal.component';
import { PedidoMenuComponent } from './components/pedidos-clientes/pedido-menu/pedido-menu.component';
import { PedidoListadoComponent } from './components/pedidos-clientes/pedido-listado/pedido-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticulosSidebarComponent,
    ArticulosComponent,
    ArticulosSideBar2Component,
    ArticulosPpalComponent,
    ImagGaleriasComponent,
    MenuGaleriasComponent,
    ImagenesPpalComponent,
    SerigGaleriasComponent,
    SerigPpalComponent,
    MenuserigComponent,
    ClientesComponent,
    ClientesPpalComponent,
    MenuclientesComponent,
    HeaderClientesComponent,
    PedidosClientesComponent,
    PedidoPpalComponent,
    PedidoMenuComponent,
    PedidoListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
