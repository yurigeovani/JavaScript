// tagged template: processa o template string dentro de uma função

function tag (partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui';
const situacao = 'Aprovado'
const pontuacao = '!!!'
console.log( tag `${aluno} está muito ${situacao} ${pontuacao}`)