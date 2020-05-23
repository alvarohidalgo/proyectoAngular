import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { ProductosComponent } from './productos/productos.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { PedidoComponent} from './pedido/pedido.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
const routes: Routes = [
  { path: 'login', component: FormLoginComponent},

  { path: 'navbar', component: BarranavegacionComponent, children: [
    { path: 'prods', component: ProductosComponent},
    { path: 'vermas', component: VerMasComponent},
    { path: 'carrito', component: PedidoComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
