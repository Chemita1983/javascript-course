// Paso por valor en JS

// Aplica cuando estamos pasando información de tipo primitivo (number, bool, string).

let argumento = 10
cambiarValor(argumento);
console.log(argumento);

function cambiarValor(parametro){
    parametro = 20;
}

// Se pasa una copia del valor de argumento, no se modifica el valor de argumento.