/**
 * Ejemplos de tipos de datos en javascript
 */

//tipo de dato string
var nombre = "Hola Mundo desde JavaScript";
console.log(nombre);
//tipo de dato numerico
nombre = 10.5;
console.log(nombre);
console.log(typeof nombre);
var numero = 1000;
console.log(numero);
//tipo de dato object
var object = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "5555"
};
console.log(typeof object);

//tipo de dato boolean
var bandera = true;
console.log(typeof bandera);

//tipo de dato function
function miFuncion(){
    console.log(typeof miFuncion);
}

//simbol para crear un valor unico de una variable
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//tipo undefined
var x;
console.log(typeof x);
x= undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//
var autos = ['BMV','AUDI','VOLVO'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);

//concatenacion de cadenas
var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre.concat(' ').concat(apellido);
console.log(nombreCompleto);

var x = nombre.concat(2).concat(219);
console.log(x);

x = nombre.concat(2+4);
console.log(x);

x = 2+4+nombre;
console.log(x);

//declaracion de variables javascript