const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Leitura síncrona...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo)


// Leitura assíncrona...
fs.readFile(caminho,'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo); // O comando abaixo somente funcionará se CONFIG for um objeto

    console.log(`${config.db.host}:${config.db.port}`)
})

// Uma segunda forma de leitura de arquivo
const config = require('./arquivo.json')
console.log(config.db)


// Leitura de pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})