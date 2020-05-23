import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  totalPedido: number = 0;

  constructor(public mainService: MainService, private ruta: Router) { 
    for(let key in mainService.productosEnCarrito) {
      this.totalPedido += (mainService.productosEnCarrito[key].qPedido * this.mainService.productosEnCarrito[key].precio);
    }

  }
  ngOnInit(): void {
  }

  atras(){
      this.ruta.navigate(['navbar/prods']);
  }

  pagar(){
    for(let key in this.mainService.productosEnCarrito){
        const nuevasExistencias = this.mainService.productosEnCarrito[key].existencias - this.mainService.productosEnCarrito[key].qPedido;
        const idProd = this.mainService.productosEnCarrito[key].id;
        const prodUrl = 'https://usuarios-tienda-a47d7.firebaseio.com';
        let url = `${prodUrl}/${idProd}/existencias.json`;
        this.mainService.descargaExistencias(url, nuevasExistencias)
        .subscribe(
          (datos: Response)=>{
            // console.log("Correcto existencias actualizadas: ", datos);
          }, (error)=> {
            console.log("ERROR: ",error)
          }
        )
        for(let key1 in this.mainService.relacionProductos){
          if(this.mainService.relacionProductos[key1].producto === this.mainService.productosEnCarrito[key].producto){
            this.mainService.relacionProductos[key1].existencias = nuevasExistencias;
            this.mainService.relacionProductos[key1].qPedido = null;            
          }
        }
      }
      this.mainService.longitudArreglo = 0;
      this.mainService.productosEnCarrito = [];
      alert("Los productos del pedido se descargaron con éxito.");
      this.ruta.navigate(['navbar/prods']);
  }
}
