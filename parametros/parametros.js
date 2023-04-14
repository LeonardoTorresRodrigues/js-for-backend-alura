// parâmetros de função

function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros são diferentes de argumentos

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Leonardo", 25));

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2;
}

console.log(multiplica(soma(4, 5)));