// Realiza la suma de los 5 primeros numeros utilizando un ciclo while y doWhile:
// 1 + 2 + 3 + 4 + 5 --> 15
// 3 + 3 + 4 + 5  --> 15
// 6 + 4 + 5  --> 15
// 10 + 5 --> 15

const MAXIMO = 5;
let numeroAnterior = 0;
let totalSuma;
let numero = 1;

// WHILE
while(numero <= MAXIMO){
    totalSuma = numeroAnterior += numero;
    numero++;
}
console.log(`La suma total de los ${MAXIMO} primeros números es ${totalSuma}`);

//DO WHILE
numero = 1;
totalSuma = 0;
numeroAnterior = 0;
do {
    totalSuma = numeroAnterior += numero;
    numero++;
}
while(numero <= MAXIMO);

console.log(`La suma total de los ${MAXIMO} primeros números es ${totalSuma}`);