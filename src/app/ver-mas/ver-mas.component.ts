import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})

export class VerMasComponent implements OnInit {

productoAconsultar;

constructor(private mainService: MainService, private location: Location) {
    this.productoAconsultar = mainService.producto;
  }

  ngOnInit(): void {
  }

  atras(){
    this.location.back()
  }
  
}
