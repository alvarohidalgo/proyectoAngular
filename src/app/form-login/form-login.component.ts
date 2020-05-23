import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  email: string;
  pwd: string;

  constructor(private mainService: MainService, private ruta: Router) { }

  ngOnInit() { }

  login() {
    this.mainService.login(this.email, this.pwd)
      .then(value => {
        this.mainService.leaProductos();
        this.ruta.navigate(['navbar/prods'])
      })
      .catch(err => {
        alert('Email y/o password errado(s).');
      });
  }
}
