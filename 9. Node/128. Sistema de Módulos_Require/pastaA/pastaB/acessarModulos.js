const moduloA = require('../../../126. Sistema de Módulos/moduloA')

console.log(moduloA.ola)

//const c = require('./pastaC/index') // Pode ser importado assim mas não precisa do index.
const c = require('./pastaC')
console.log(c.ola2)

// Utilizando o módulo core do node
const http = require('http');

http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)