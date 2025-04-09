// Iterar matrices en js

let matrix = [[0, 1, 2, 3, 4], [10, 11, 12, 13, 14]];

// Recorremos filas
for (let i = 0; i < matrix.length; i++) {
    // Recorremos columnas
    for (let x = 0; x < matrix[i].length; x++) {
        console.log(`Matriz[${i}][${x}] = ${matrix[i][x]}`);
    }
}