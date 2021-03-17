console.log(this === global); // falso, pois o THIS não aponta para GLOBAL e sim MODULE.EXPORTS
console.log(this === module); // falso, pois o THIS é um objeto que é exatamente a referencia de MODULE.EXPORTS
console.log(this === module.exports);
console.log(this === exports); // verdadeiro também, pois o EXPORTS aponta também para MODULE.EXPORTS

function logThis(){
    console.log('Dentro de uma função...');
    console.log(this === exports); // falso, pois dentro de uma função o THIS não aponta para MODULE.EXPORTS
    console.log(this === module.exports); // falso, pois dentro de uma função o THIS não aponta para MODULE.EXPORTS
    console.log(this === global) // verdadeiro, pois o THIS dentro de função aponta para GLOBAL
}

logThis() 

console.log(this.perigo)

// o THIS acessado dentro de uma função faz referência a GLOBAL e fora de função, faz referência a MODULE.EXPORTS.