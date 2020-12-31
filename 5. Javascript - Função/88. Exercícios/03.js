/* 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function potencia (base, expoente){
    let resultado = base;
    resultado = base ** expoente;

    return `
    BASE: ${base}
    EXPOENTE: ${expoente}
    RESULTADO: ${resultado}`
}

console.log(potencia(2,3));