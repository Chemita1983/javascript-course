var x; // 1. Declarar la variable.
x = 10; // 2. Inicializar la variable.
console.log(x);


// Hoisting -- > Podemos usar una variable y luego declararla.
y = 10;
var y;


// Con let no funciona el hoisting.
//z = "Hola";
//let z;

/*
    Poniendo al inicio del archivo 'use strict' 
    usaremos el lenguaje JS estricto y no nos permitirá hacer
    hoisting
*/
