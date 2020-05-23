import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormLoginComponent } from './form-login/form-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    ProductosComponent,
    VerMasComponent,
    BarranavegacionComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
