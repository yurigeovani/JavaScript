// Object.preventExtensions: previne o aumento de novos atributos no obj

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'
delete produto.tag;
console.log(produto)

//Object.seal = selar (não consegue adicionar/excluir novos atributos, apenas modificar)
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.nome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa)

//Object.freeze = (selado+valores constantes) = não permite realizar nenhuma modificação.