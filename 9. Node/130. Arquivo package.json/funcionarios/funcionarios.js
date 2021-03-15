// DESAFIO

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
    let funcionarioMenorSalario = {salario:999999.99};

    for(let i of funcionarios){
        if(i.pais=='China' && i.genero == 'F'){
            if(i.salario<funcionarioMenorSalario.salario){
                funcionarioMenorSalario = i;
            }
        }
    }

    console.log('1', funcionarioMenorSalario)
})


axios.get(url).then(response => {
    const funcionarios = response.data;
    let funcionarioMenorSalario = {salario:999999.99};

    function menorSalario(funcionario){
        if(funcionario.pais == 'China' && funcionario.genero == "F")
            funcionario.salario<funcionarioMenorSalario.salario ? funcionarioMenorSalario = funcionario : null;
    }

    funcionarios.forEach(e => menorSalario(e));

    console.log('2', funcionarioMenorSalario)
})


// Teacher Resolution
const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    const funcionariaChinesaMenorSalario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log('3', funcionariaChinesaMenorSalario)
})