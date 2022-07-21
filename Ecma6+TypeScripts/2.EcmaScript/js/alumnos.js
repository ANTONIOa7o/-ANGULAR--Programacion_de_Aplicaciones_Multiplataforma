var alumnos = [
  [1, "Juan", "Sanchez", 8.2],
  [2, "Maria", "Lopez", 5.2],
  [3, "Pedro", "Alvarez", 4.3]
];

class Alumno{
/*
1.Caracteristicas del objeto
2.Propiedades
3.Variables Globales
*/
id;
nombre;
apellidos;
nota;

/*
 *Constructor 
*/
constructor(id, nombre,apellidos,nota){
    this.id=id;
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.nota=nota;
}
mostraInformacion(){
    document.write(`Datos del alumno: id ${this.id}, nombre: ${this.nombre}, y apellidos
     ${this.apellidos}, con nota: ${this.nota}`+ "<br>");
}
/*Acciones que podamos llevar a cabo con el object
                        ↓                               */
}

for(let i in alumnos){
    let[id,nombre,apellidos,nota]=alumnos[i];
    let listaAlumnos = new Alumno(id,nombre,apellidos,nota);
    /*
    let listaAlumnos = new Alumno(...alumnos[i]);
    */
   listaAlumnos.mostraInformacion();

}
