import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
/*
Para genera las conexiones de enrutacion han de contar con los siguiente recursos:

1º Routes ⇨ Será la libreria encargada de  permitir implantar la navegacion entre nuestros componentes en la aplicacion
, donde se podran asignar templates especificos para cada url que deseemos. 
   ⨀ Añadiendo además una ventaja tactica como la de enviar y recibir parametros[queryParams] 

2º RouterModule ⇨ Será quien da los requisitos a los componentes para que se asignen su propia ruta
*/
import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InicioComponent } from './inicio/inicio.component';

//Declar nuestras rutas, Como Array fuera del entorno del decorador ngModule

const misRutas: Routes = [
  { path: 'c1', component: Componente1Component },
  { path: 'c2', component: Componente2Component },
  { path: 'c3', component: Componente3Component },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }

];


@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
