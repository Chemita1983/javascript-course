// Subcadenas en JS
let cadena = "Hola Mundo"
console.log(cadena);

let cadenaHola = cadena.substring(0,4);
console.log(cadenaHola);

// Si queremos extraer hasta el final no hace falta poner el indice final.
let cadenaMundo = cadena.substring(5);
console.log(cadenaMundo)

console.log(`${cadenaHola} ${cadenaMundo}`)