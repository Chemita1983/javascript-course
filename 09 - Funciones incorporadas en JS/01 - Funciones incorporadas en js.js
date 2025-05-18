// Funciones incorporadas

// Obtener la longitud de una cadena.
let cadena = 'Hola';
console.log(cadena.length);


// No podemos modificar una cadena en JS ya que son inmutables.
cadena[0] = 'x';
console.log(cadena);

// Si podemos asignar una nueva cadena
cadena = 'Adios';
console.log(cadena);


// Recorrer cadena.
for (let i = 0; i < cadena.length; i++){
    console.log(`${i} - ${cadena[i]}`)
}