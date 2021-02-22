/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará [] */


function filtrarNumeros1(array){
    let vetor = [];

    array.forEach(element => {
        typeof(element)==='number' ? vetor.push(element) : null;
    });
    
    return console.log(vetor);
}

filtrarNumeros1(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros1(["a", "c"]) // retornará []



// Teacher resolution
function filtrarNumeros2(array){
    return console.log(array.filter(element => typeof(element)==='number'));
}

filtrarNumeros2(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros2(["a", "c"]) // retornará []