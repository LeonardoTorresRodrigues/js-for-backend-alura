const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// faz uma array de arrays
// const numeros = [numerosPares, numerosImpares];

const numeros = [...numerosPares, ...numerosImpares];
// ...numerosPares [abre a array, pega os dados e joga na const numeros]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

// atribuindo um valor padrão
const [nome1 = "Leo"] = [];

const pessoa = {
  nome: "Leonardo",
  idade: 25
}

const pessoaComTelefone = { ...pessoa, telefone: 123456789 };

//const nome = pessoa.nome;
const { nome } = pessoa;

// fazendo o destructuring direto no parâmetro da função
function imprimeDados({ nome, idade }) {
  console.log(nome, idade)
}

imprimeDados(pessoa);