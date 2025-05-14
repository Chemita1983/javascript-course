// Paso por referencia en JS

// Aplica cuando estamos pasando objetos (arrays)

function cambiarValor(parametro){
    parametro[0] = 20;
}


let miArray = [10];
console.log(miArray);
cambiarValor(miArray);
console.log(miArray);