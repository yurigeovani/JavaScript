function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        console.log(`
        num ${numero}`)
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))