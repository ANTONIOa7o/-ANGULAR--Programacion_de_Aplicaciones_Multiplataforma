import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


alumnos: any =[
  {valoracion:'alta',repetidor:false,nombre:'Juan',apellidos:'Lopez',nota:7.5},
  {valoracion:'media',repetidor:false,nombre:'Maria',apellidos:'Sanchez',nota:5.8},
  {valoracion:'baja',repetidor:true,nombre:'Elena',apellidos:'Arias',nota:3.5},
  {valoracion:'media',repetidor:true,nombre:'Roberto',apellidos:'Rodriguez',nota:6.5},
  {valoracion:'baja',repetidor:false,nombre:'Javier',apellidos:'Martin',nota:4.5},
  {valoracion:'alta',repetidor:false,nombre:'Marta',apellidos:'Gonzalez',nota:8.5}

]


}
