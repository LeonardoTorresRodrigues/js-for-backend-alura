const notas = [7, 7, 8, 9];

const novasNotas = [5, ...notas, 10]; // passando valores diretamente na cópia do array

// novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);