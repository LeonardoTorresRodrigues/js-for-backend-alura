const alunos = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo',
];

// console.log(alunos);

// console.log(alunos.slice(0, 10));

const sala1 = alunos.slice(0, alunos.length / 2); // pegando do index 0 ao 9
const sala2 = alunos.slice(alunos.length / 2); // pegando do index 10 até o final do array

console.log(sala1);
console.log(sala2);