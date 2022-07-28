import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo5-Binding';

  nombre: string ='Toño';
  apellidos: string='Cuadrado Alvarez';
  miTitulo: string='CONSTRUCCIONES: Data Binding en Angular'
  habilitado: boolean =true;
  email:string='andragogo1012'
  estilo='rojo';

  //constructor- funcion principal de genera llamadas para crear objetos

constructor(){

  setTimeout(()=>{ this.habilitado = false;},5000);
}
 
saludar():void{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Hola..! Bienvenido a  las construcciones de Angular',
    showConfirmButton: false,
    timer: 1500
  })
}

}
