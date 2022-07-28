import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo4-Pipes';

texto:string='Acercandonos al Desarrollo Angular';
numero:number=7788.45678910;
porcentaje:number=0.5678910;
fecha:Date = new Date();
jsonObjeto ={nombre:'Juan',edad:45,telefonos:{tel1:916564433,tel2:916567788}}

}
