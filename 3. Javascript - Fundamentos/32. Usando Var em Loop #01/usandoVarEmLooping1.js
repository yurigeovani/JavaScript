for (var i = 0; i<10; i++){
    console.log(i);
}

console.log('i = ', i);

/**
 * O valor de i está disponível fora do laço porque foi declarado com var.
 * Caso tivesse sido declarado com let, estaria disponível apenas dentro do laço.
 */