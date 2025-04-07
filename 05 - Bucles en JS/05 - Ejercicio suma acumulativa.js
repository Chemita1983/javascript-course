// Realiza la suma de los 5 primeros numeros utilizando un ciclo for:
// 1 + 2 + 3 + 4 + 5 --> 15
// 3 + 3 + 4 + 5  --> 15
// 6 + 4 + 5  --> 15
// 10 + 5 --> 15

let repeticiones = 5;
let numeroAnterior = 0;
let totalSuma;

for(let numero = 1; numero <= repeticiones; numero ++){
    totalSuma = numeroAnterior += numero;
}

console.log(`La suma total de los ${repeticiones} primeros números es ${totalSuma}`);