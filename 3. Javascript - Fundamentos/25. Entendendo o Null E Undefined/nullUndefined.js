let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);

const produto = {};
console.log(produto);
console.log(produto.preco);

produto.preco = 4.5;
console.log(produto);

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);