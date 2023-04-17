const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // removendo o último valor do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média á ${media}.`);