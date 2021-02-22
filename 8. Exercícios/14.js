/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]] */


function objetoParaArray(objeto) {
    let array = [];
    for(let i in objeto){
        array.push([i,objeto[i]])
    }
    
    return console.log(array)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]



// Teacher resolution
function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    return console.log(resultado)
}


objetoParaArray2({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray2({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]