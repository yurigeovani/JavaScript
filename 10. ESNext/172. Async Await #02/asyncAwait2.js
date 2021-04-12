function gerarNumerosEntre(min, max, numerosProibidos){
    min > max ? [min, max] = [max, min] : null;

    return new Promise((resolve, reject) => {
        const fator = max-min+1;
        const aleatorio = parseInt(Math.random() * fator)+min;

        if(numerosProibidos.includes(aleatorio)){
            reject(`Número repetido: ${aleatorio}`)
        } else {
            resolve(aleatorio);
        }
    })
}


async function gerarMegaSena(qtdNumeros, tentativas = 1){
    try{
        const numeros = [];
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros;
    } catch(e){
        if(tentativas > 10){
            throw "Não deu certo mesmo!!!"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas+1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log) 