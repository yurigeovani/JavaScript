
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro';

console.log(pessoa)

// pessoa <- {....} <-
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa); // congela os valores e atributos do objeto

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC'
delete pessoa.nome;

console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)