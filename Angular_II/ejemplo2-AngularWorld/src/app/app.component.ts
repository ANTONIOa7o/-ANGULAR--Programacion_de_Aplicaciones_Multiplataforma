import { Component } from '@angular/core';
/*
  ================================
      LOS COMPONENTES [ANGULAR]
  ================================
I. Un modulo en una app, tendrá entidad propia y puede estar compuesto por mas
de un componente.
II. Cada vista deberia o debe ser un  componente, puede o no componerse de otros, 
dependiendo de su complejidad, profundidad uso y/ o la propia reutilizacion del codigo


=>> Uno de los componentes mas relevantes sera el : app.Component.ts ⇓
    Este componente como ejemplo, consta de :

    a) Decorador del Componente

    @Component: Palabra reservada para declarar un coponente, contiene varios
    elementos
     i. selector: Target (Html DONDE se insertará el componente)
     ii. template: View (Archivo html que USA el componente)
     iii. stylesUrl: Styles View( Archivos Css, inyectado en el template)
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
     b) Class Orientado a Object 
 */
export class AppComponent {

  // Definiamos las cualidades o propiedades del objeto
  //Variables
  title = 'Bienvenido a mi Primera Pagina [ANGULAR]';
  nombre: string = "a7o";
}
//Declararemos metodos

//Funcionalidades desde ts (js)
