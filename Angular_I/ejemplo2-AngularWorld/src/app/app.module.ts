/*       ================
              MODULE
          ==============
a) Caracteristicas:
  i.Los modulos son piezas mas grandes en las que se puede dividir una aplicacion
  angular.
  ii.Podrán ser reutilizables, dentro de nuestros proyectos pero tambien podemos
  usarlas en otros
  iii. Angular nos ofrece modules nativos, como HTTP, browser, formularios, 

b) Categorias de Module:
  i.Nativas: Provistos por Angular
  ii.terceros: realizado por otras personas y que nos aprovechamos de su uso, libre
  o de pago
  iii.Propias:
*/
import { NgModule } from '@angular/core';
/*
 * NgModule ==> referente a la hora de inyectar y compilar, asi como ayudar a 
agrupar componententes similares
Caracteristicas:
  i) Este module toma un objeto que describe como compilar el template de un 
  componente
  ii) Genera como crear e inyectar en tiempo real de ejecucion
  iii).Identifica los componentes del propio modulo, directivas, pipes,..
  iv). Puede añadir otros proveedores tales como servicios
*/
import { BrowserModule } from '@angular/platform-browser';
/*
BrowserModule==> Se encargará de la exportacion de la infraestructura requerida
para todas las aplicaciones angular
*/
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TextoComponent } from './texto/texto.component';


/*
Decorador @NgModule, volvemos a ese concepto de decorador @, visto en app.Component
resultado palabra tambien reserva (NgModule), añade estructura a este modulo
A traves de 4 Arrays
1º declarations: Estan declarados todos los componentes, lista de componentes
2º imports: Listado de modulos
3º providers: Lista de Servicios (conexiones a BBDD o recursos)
4º bootstrap: Componente de inicio 
*/
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
⇚  package.json
Mantiene estructura json {}, Este será nustro archivo de configuracion del
proyecto, Contiene las referencias de las librerias que nuestro angular va
a necesitar y que Angular Cli(Via NPM) se encarga de instalarlas (node_modules)
 y asi mismo podemos seguir añadiendo todas las librerias que necesitemos siempre
 con la finalidad de cubrir las necesidades, funcionaledades y requisitos
 que necesite nuestra aplicacion.

*/
