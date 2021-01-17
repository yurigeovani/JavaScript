const soma = function (x,y){
    return x+y;
}

const subtracao = function (x,y){
    return x-y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b));
}

imprimirResultado(3,4);

imprimirResultado(3,4,soma);
imprimirResultado(2,4,subtracao)
imprimirResultado(2,4,function(x,y){
    return x*y;
})
imprimirResultado(8,4,(x,y)=>x/y) // passando uma arrow function como parâmetro

const pessoa = {
    falar: function () { // pode-se usar uma função como atributo
        console.log('Opa!');
    },
    gritar(){ // o nome function não é obrigatório
        console.log('OPA!');
    }
}

pessoa.falar();
pessoa.gritar();

// OBS.: Se a função for arrow, sempre será anônima.