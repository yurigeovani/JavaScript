// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1(){
    return
};

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um array
const array = [function(a,b) {return a+b}, fun1, fun2];

console.log(array[0](2,3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Olá'};
console.log(obj.falar());

// Passar função como parâmetro
function run (fun){
    fun()
};

run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4);
const cincoMais = soma(2,3);
cincoMais(4)


/** Exemplo de high order function do site 
 * https://medium.com/lfdev-blog/me-explica-96651fc2c105#:~:text=Higher-order%20Functions%20
 */

function portuguese() {
    return `Olá`;
}

function english() {
    return `Hello`;
}

function french() {
    return `Bonjour`;
}

function italian() {
    return `Ciao`;
}

function japanese() {
    return `こんにちは`
}


function helloWorld(language,nome){
    return `${language}, ${nome}!`;
}


console.log(helloWorld(portuguese(),`Alex`))
console.log(helloWorld(english(),`Diego`))
console.log(helloWorld(french(),`Thalyta`))
console.log(helloWorld(italian(),`Alex`))
console.log(helloWorld(japanese(),`Hiroshi`))