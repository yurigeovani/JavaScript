/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará [] */


function buscarPalavrasSemelhantes(palavra, array){
    let resultado = []
    for(let i of array){
        if(i.includes(palavra)){
            resultado.push(i)
        }
    }

    return console.log(resultado)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []



// Teacher resolution
const buscarPalavrasSemelhantes2 = (palavra, array) => console.log(array.filter(e => e.includes(palavra)))

buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes2("python", ["javascript", "java", "c++"]) // retornará []