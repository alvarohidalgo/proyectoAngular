import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.css']
})
export class BarranavegacionComponent implements OnInit {

@Input() numeroDeProductos: number;

  constructor(public mainService: MainService, private ruta: Router) { }
  ngOnInit() : void {
    
   }

  vayaAprods(){
    this.ruta.navigate(['navbar/prods']);
  }

  vayaAcarrito(){
    if(this.mainService.longitudArreglo !== 0){
        this.ruta.navigate(['navbar/carrito'])
    }else{
      alert("No hay productos en el carrito de compras")
    }
  }

  vayaALogin(){
    this.mainService.productosEnCarrito = [];
    this.mainService.relacionProductos = [];
    this.mainService.relacionProductosFiltrados = [];
    this.mainService.longitudArreglo=0;
    this.mainService.producto=[];
    this.ruta.navigate(['login'])
  }
}
