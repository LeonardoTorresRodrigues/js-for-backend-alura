const notas = [10, 6, 8];

notas.push(7); // passando nova nota como parâmetro e adicionando ela ao array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);