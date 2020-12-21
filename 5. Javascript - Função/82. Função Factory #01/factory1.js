// função que retorna/cria novo(s) objeto(s)

// Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());