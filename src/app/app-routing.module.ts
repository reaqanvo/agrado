import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosPpalComponent} from '../app/components/articulos-ppal/articulos-ppal.component';
import { ImagenesPpalComponent} from '../app/components/imag-galerias/imagenes-ppal/imagenes-ppal.component';
import { SerigPpalComponent} from '../app/components/serig-galerias/serig-ppal/serig-ppal.component';
import { ClientesPpalComponent} from '../app/components/clientes/clientes-ppal/clientes-ppal.component';
import { PedidoPpalComponent} from '../app/components/pedidos-clientes/pedido-ppal/pedido-ppal.component';

const routes: Routes = [
  {
    path: 'articulosPpal',
    component: ArticulosPpalComponent,
  },
  {
    path: 'ImagenesPpal',
    component: ImagenesPpalComponent,
  },
  {
    path: 'serigPpal',
    component: SerigPpalComponent,
  },
  {
    path: 'clientes',
    component: ClientesPpalComponent,
  },
  {
    path: 'pedidosclientes',
    component: PedidoPpalComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
