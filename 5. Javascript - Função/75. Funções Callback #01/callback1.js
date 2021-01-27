const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir (nome, indice){
    console.log(`${indice+1}. ${nome}`);
}

fabricantes.forEach(imprimir);

/* fabricantes.forEach(function(fabricante){
    console.log(fabricante);
})

// ou fazer em arrow function

fabricantes.forEach(fabricante => console.log(fabricante)) */