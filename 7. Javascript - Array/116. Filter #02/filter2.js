Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter2(function(p){
    return false;
}))

const isExpensive = p => p.preco>=500;
const isCheap = p => p.preco<500;
const isFragile = p => p.fragil;

console.log(produtos.filter2(isExpensive).filter2(isFragile))
console.log(produtos.filter2(isCheap).filter2(isFragile))