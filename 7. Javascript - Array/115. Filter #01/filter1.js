const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false;
}))

const isExpensive = p => p.preco>=500;
const isCheap = p => p.preco<500;
const isFragile = p => p.fragil;

console.log(produtos.filter(isExpensive).filter(isFragile))
console.log(produtos.filter(isCheap).filter(isFragile))