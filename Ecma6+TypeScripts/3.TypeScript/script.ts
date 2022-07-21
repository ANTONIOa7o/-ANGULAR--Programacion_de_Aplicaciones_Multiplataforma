/*

o Como  hevos visto ECMASCRIPT, comprobamos su version mas actual es JavaScript,  adoptando
gran parte de sus  principios

Una de las caracteristicas  mas impotantes en el desarrollo TS, es la inclusion   del tipo 
information
Este tipo permite la creacion  de un codigo mas predecible, y de facil lectura.
Con lo cual la deduccion es:
*/
function add (a,b):any /* define la conyuntura de elementos a refernciar, sin definir  su tipo*/
{
    return(a+b);

}
/*
Type ademas agrega los siguientes tipos:

1.enum- Enumeraciones como {rojo, verde, azul} 
2.any- Posiblidad de usar culquier tipoo
3.void- nada

enum ⇓
    los elementos de tipo enum, agregan la posibilidad de asignarles una serie de nombres
    para acceder a ellos de forma más facil(accesible)
*/
enum Color{Rojo,Verde,Azul};
let c: Color = Color.Verde;
/*
poniendo el curso podemos  observar, los  valores que asigna,son  los de  un array
siendo el primer elemento 0. Podemos cambiar el valor o incluso espeficar uno concreto
para cada uno de ellos
*/
enum Color{Naranja=1,Violeta,Negro};
enum Color{Gris=2, Azulado=4,Verdoso=6};
/*
 *Ventajas que no va a ofrecer será la posibilidad de recuperar el nombre de cada uno de los elementos
 o simplemente acceder a través de su posicion. 
*/
enum Color{Calcareo=1,Magenta,AguaMarina};
console.log(Color[2]);//Devuleve Magenta

/*
any ⇓

En muchas ocasiones TS,  necesita definir variables de las que desconoce
de primeras,el tipo que van a representar.
-Suelen ser valores obtenidos de alguna forma dede algun tipo de contenido dinamico
o desde la propia carga de datos de usuario o de  librerias de  terceros..,
-En este ultimmop caso usamos el tipo any, conn la intencionalidad comprobar por ejemplo
tiempos de ejecución.
*/
let noSeguro: any =4;
/*
Otra opicion util para el uso de  any, lo encontramos cuando trabajammos   con colecciones,arrays,
...que  conocemos sólo  que alguno de los tipos de los  elementos que lo conforman
*/
let lista: any[]=[1,true,'free'];
lista[1]=100;
/*
void ⇓
- Los podemos  definir como el caso contrario de any
es  decir, queremos definir la ausencia del tipo en la variable con la que
estamos trabajando
- El lugar mas comun donde vamor a poder encontrarla es en la definicion del 
valor de retorno en una funcion

*/

function sinRetorno(){
    void(console.log('Funcion sin retorno'));
}
/*
Declarar las variables como void, no serán de gran ayuda ya que solo podremos
asignarles los tipos undefined o  null.
*/
