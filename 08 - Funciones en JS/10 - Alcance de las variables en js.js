// Alcance de las variables en JS

let globalVar = 5;

// Podemos modificar el valor de una variable global
globalVar = 10;

function miFunction(localVar){
    console.log(localVar);
    // Modificamos el valor de la variable global
    globalVar = 20;
    // No podemos redefinir una variable global (let)
    // let globalVar = 30;
}

// Llamamos a la función
miFunction(globalVar);
console.log(globalVar);