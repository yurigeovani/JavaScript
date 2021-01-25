/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

const calcularAltura = (alt1, tx1, alt2, tx2) => {
    if(alt1==alt2){
        if(tx1>tx2){
            return 'A criança 1 ultrapassará a criança 2 em um ano.'
        } else if (tx2>tx1){
            return 'A criança 2 ultrapassará a criança 1 em um ano.'
        } else {
            return 'As crianças tem mesmo tamanho e taxa.'
        }
    } else if(alt1>alt2){
        if(tx1>tx2){
            return 'A criança 2 nunca ultrapassará a criança 1.'
        } else {
            return calcularAnos(alt2,tx2,alt1,tx1);
        }
    } else if (alt2>alt1){
        if(tx2>tx1){
            return 'A criança 1 nunca ultrapassará a criança 2.'
        } else {
            return calcularAnos(alt1,tx1,alt2,tx2);
        }
    } 
}

const calcularAnos = (altMenor,txAltMenor,altMaior,txAltMaior)=>{
    let anos=0;
    while (altMenor<altMaior) {
        anos++;
        altMenor+=txAltMenor;
        altMaior+=txAltMaior;
    }
    return anos;
}

console.log(calcularAltura(100, 15, 80, 20));
console.log(calcularAltura(150, 2, 130, 4));
console.log(calcularAltura(150, 2, 150, 4));
console.log(calcularAltura(150, 5, 150, 4));
console.log(calcularAltura(150, 2, 150, 2));
console.log(calcularAltura(130, 5, 120, 4));