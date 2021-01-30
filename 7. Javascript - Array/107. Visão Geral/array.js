console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array ('Bia', 'Carlos', 'Ana');

console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo' // mais comum para substituir um valor de determinado índice
aprovados.push('Abia') // mais comum para adicionar um valor num array
console.log(aprovados.length)

aprovados[9] = 'Rafael';
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)

aprovados.sort();
console.log(aprovados)

delete aprovados[1]; // não deleta o índice, apenas altera o valor para undefined

console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana', 'Mateus'];

// Método splice
// serve para adicionar elementos em determinado índice, também serve para remover, ou para ambas opções
//primeiro parâmetro: Índice onde iniciará o adicionar ou remover índices
//segundo parâmetro: Quantidade de índices que serão removidos
aprovados.splice(1,2) // Remove 2 a partir do índice 1
console.log(aprovados)

aprovados.splice(1,1,'Pedro', 'João') // Remove 1 a partir do índice 1 e adiciona Pedro e João
console.log(aprovados)

aprovados.splice(2, 0, 'Maria', 'José') // Adiciona 2 a partir do índice 2
console.log(aprovados)