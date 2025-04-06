// Operadores de comparación

let a = 5;
let b = '5';
console.log(a);
console.log(b);

// Operador de igualdad == 
// (Sólo compara valores y hace una conversión si es necesario)
console.log("a == b -> ", a == b);
// String Interpolation
console.log(`${a} == ${b} -> ${a == b}`);

// Operador de igualdad (tipo y valor) ===
// (Compara valores y tipo de dato)
console.log("a === b -> ", a === b);
// String Interporlation
console.log(`${a} === ${b} -> ${a === b}`);


// Operador distinto
// Compara el valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`);

// Operador distinto estricto
// Compara el valor y tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`);

// Operador menor que
console.log(`${a} < ${b} -> ${a < b}`);

// Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`);

// Operador mayor que
console.log(`${a} > ${b} -> ${a > b}`);

// Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`);