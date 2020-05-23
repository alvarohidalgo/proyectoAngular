import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  producto = [];
  productosEnCarrito = [];
  relacionProductos = [];

  relacionProductosFiltrados = [];

  longitudArreglo = 0;

  constructor(private afAuth: AngularFireAuth, private httpClient: HttpClient) { }

  login(usuario, clave) {
    return this.afAuth.auth.signInWithEmailAndPassword(usuario, clave);
  }

  leaProductos() {
    this.relacionProductos = [];
    this.httpClient.get('https://usuarios-tienda-a47d7.firebaseio.com/.json')
      .subscribe((data: Response) => {
        for (let key in data) {
          data[key].qPedido = null;
          this.relacionProductos.push(data[key]);
        }
      });
    this.relacionProductosFiltrados = this.relacionProductos;
    return this.relacionProductos;
  }

  cargueProductosEnCarrito(prodPed) {
    this.productosEnCarrito.push(prodPed);
    return this.productosEnCarrito
  }

  elimineProductodelCarrito(proAeliminar) {
    var i = this.productosEnCarrito.indexOf(proAeliminar);
    if (i !== -1) {
      this.productosEnCarrito.splice(i, 1);
    }
    return this.productosEnCarrito;
  }

  descargaExistencias(url, nuevasExistencias) {
    return this.httpClient.put(url, nuevasExistencias);
  }

  carritoEnCeros() {
    return this.productosEnCarrito = [];
  }
}
