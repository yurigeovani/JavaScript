// DESTRUCTURING (Desestruturação)
// novo recurso ES2015
// possibilita extrair dados de arrays ou objetos em variáveis distintas

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)

const { nome, idade } = pessoa; // destructuring mantendo mesmos nomes
console.log(nome, idade);

const { nome: n, idade: i} = pessoa; // destructuring alterando os nomes
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; //passando valores padrões (caso retorne unefined, assume o valor padrão)
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

const { endereco } = pessoa;
console.log(endereco);