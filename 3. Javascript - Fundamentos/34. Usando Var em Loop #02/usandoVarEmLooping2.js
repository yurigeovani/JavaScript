const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();
funcs[8]();

/**
 * Para todas as funções será impresso o valor de 10 porque i foi declarado com var
 */