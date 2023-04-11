// convertendo os tipos dos dados

// conversão implícita
const numero = 456;
const numeroString = "456";

// console.log(numero === numeroString); [false]
console.log(numero == numeroString) // [true]
// pegou a const numero e converteu em string

// conversão explícita
console.log(numero + Number(numeroString));
// converteu a string para number
// também é possível declarar a variável já passando a conversão
// const numeroString = Number("456");