// Funcion recursiva es una funcion que se llama asi misma.
// Debe avanzar hacia un caso base sino va a caer en ciclos infinitos.

function sumaNumero(numero){
    if (numero <= 100) {
        console.log(numero);
        sumaNumero(numero + 1)
    }
    return numero;
}

console.log(sumaNumero(90));


function factorial(numero){
    if(numero <= 1) return 1;
    return numero * factorial(numero - 1);
}

//console.log(factorial(3));
