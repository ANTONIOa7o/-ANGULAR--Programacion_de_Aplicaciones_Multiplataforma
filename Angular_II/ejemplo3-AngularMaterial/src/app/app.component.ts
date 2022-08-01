import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo3-AngularMaterial';

  coches = [
    { nombre: 'Ferrari', color: 'red' },
    { nombre: 'Lamborginni', color: 'yellow' },
    { nombre: 'Lexus', color: 'blueSky' },
    { nombre: 'Rolls Royce', color: 'black' },
    { nombre: 'Tesla', color: 'orange' },
    { nombre: 'BMW', color: 'blue' }
  ];

}
