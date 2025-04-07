// Ejercicio imprimir los 10 primeros valores de 3 en 3 en positivo y negativo
// 1 - 4 - 7 - 10

let final = 10;

//POSITIVO
let miNumero = 1
for (miNumero; miNumero <= final; miNumero += 3) {
    console.log(miNumero)
}

miNumero = 1;
while(miNumero <= final){
    console.log(miNumero);
    miNumero+=3;
}

// NEGATIVO
miNumero = -1
for (miNumero; miNumero >= -final; miNumero -= 3) {
    console.log(miNumero)
}

miNumero = -1;
while(miNumero >= -final){
    console.log(miNumero);
    miNumero-=3;
}

miNumero = -1;
do{
    console.log(miNumero);
    miNumero-=3;
}
while(miNumero >= -final);