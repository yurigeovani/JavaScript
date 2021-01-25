/* 24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function imprimirHelloWorld () {
    let count = 0;

    while (count<11) {
        count++;
        console.log(`${count}) Hello, World!`);
    }
}

imprimirHelloWorld();