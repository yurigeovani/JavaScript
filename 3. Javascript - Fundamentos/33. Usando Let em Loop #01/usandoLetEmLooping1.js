for (let i = 0; i<10; i++){
    console.log(i);
}

console.log('i = ', i);

/**
 * O valor de i não está disponível fora do laço porque foi declarado com let.
 * Caso tivesse sido declarado com var, também estaria disponível fora do laço.
 */