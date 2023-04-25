const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "123456789",
  email: "andre@dominio.com",
}

// acesso com . (ponto)
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// acessando com [] (colchetes)
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});