// par nome/valor ou chave/valor ou identificador/valor

// contexto léxico (local físico onde a variável foi definida)

const saudacao = 'Opa'; // contexto léxico 1

function exec(){
    const saudacao = 'Faaala'; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);

console.log(exec());

console.log(cliente);