// Ejercicio mayor de edad (18 años)

const AÑOS_MAYOR_EDAD = 18;

let miEdad = 20;

if (miEdad >= AÑOS_MAYOR_EDAD) {
    console.log(`Eres mayor de edad con ${miEdad} años`)
} else if (miEdad < AÑOS_MAYOR_EDAD) {
    console.log(`Eres menor de edad con ${miEdad} años`)
} else {
    console.log(`Edad no valida`)
}