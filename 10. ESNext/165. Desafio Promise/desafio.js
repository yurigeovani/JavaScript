const fs = require('fs')

const path = __dirname + '/dados.txt'

// Lendo arquivos de forma síncrona
console.log('### Lendo arquivos de forma síncrona')
// Criando promessa atribuindo à constante
const promessa = new Promise(resolve => {
    const conteudo = fs.readFileSync(path, 'utf-8');
    resolve(`
Promessa atribuída à função
${conteudo}`);
})

promessa
    .then(console.log)


// Criando promessa passando o caminho como parâmetro
function lerArquivo (path) {
    return new Promise(resolve => {
        resolve(`
Promessa atribuindo à função e passando caminho como parâmetro
${fs.readFileSync(path, 'utf-8')}`);
    })
}

lerArquivo(path)
    .then(console.log)


// Criando promessa sem atribuir à constante
new Promise(resolve => resolve(`
Promessa sem atribuir à função
${fs.readFileSync(path, 'utf-8')}`))
    .then(console.log)