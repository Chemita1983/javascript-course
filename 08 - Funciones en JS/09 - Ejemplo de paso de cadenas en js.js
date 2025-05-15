// Cadenas y funciones en JS
// Cadenas inmutables en JS (No se puede modificar el valor).

function cambiarValor(parametro){
    parametro = 'Adios';
}


let argumento = 'Hola';
console.log(`Antes de la función: ${argumento}`);
cambiarValor(argumento);
console.log(`Después de la función: ${argumento}`);
