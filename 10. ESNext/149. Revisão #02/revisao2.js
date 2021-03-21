// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(3,5))

// Arrow Function (this)
const lexico1 = () => console.log(this===exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parâmetros default
function log (texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total (...numeros) {
    let total = 0;
    numeros.forEach(e => total += e);
    return total;
}

console.log(total(2,3,4,5))