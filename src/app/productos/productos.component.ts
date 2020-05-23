import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { Router } from '@angular/router';
import {ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  caracterDigitado;
  unidadesPedidas: number;

  @ViewChild('datoAbuscar') datoAbuscar: ElementRef;

  constructor(public mainService: MainService, public ruta: Router) {  }

  ngOnInit() {
  }

  adicionarEnPedido(prodAver) {
    if(!this.revisarSiprodYaEstaEnPedido(prodAver.producto)){
     if(prodAver.qPedido !=null){
        if(prodAver.qPedido !=0 ) {
          this.mainService.productosEnCarrito = this.mainService.cargueProductosEnCarrito(prodAver);
          this.mainService.longitudArreglo = this.mainService.productosEnCarrito.length;
        }else{
          alert("Cantidad pedida no puede ser cero.")
        }
      }
    }else{
      if(prodAver.qPedido == 0){
        this.mainService.productosEnCarrito = this.mainService.elimineProductodelCarrito(prodAver);
        this.mainService.longitudArreglo--;
      }
    }
  }

  revisarSiprodYaEstaEnPedido(prodArevisar){
    for(let key in this.mainService.productosEnCarrito){
      if(this.mainService.productosEnCarrito[key].producto == prodArevisar){
        return true;
      }
    }
    return false;
  }

  filtraProductos(newValue: string){
    var newValue1 = newValue.toLocaleLowerCase();
    this.mainService.relacionProductosFiltrados = [];
    for(let key in this.mainService.relacionProductos ){
      var productoMinusculas = this.mainService.relacionProductos[key].producto.toLowerCase()
      if(productoMinusculas.includes(newValue1)) {
        this.mainService.relacionProductosFiltrados.push(this.mainService.relacionProductos[key]);
      }
    }
  }

  pulsoEsc(){
    this.datoAbuscar.nativeElement.value = ""
    this.mainService.relacionProductosFiltrados = this.mainService.relacionProductos;
  }

  verMas(prodAver){
    this.mainService.producto = prodAver;
    this.ruta.navigate(['navbar/vermas']);
  }

}
