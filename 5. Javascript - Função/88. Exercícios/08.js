/* 08) ​ Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */


let stringPontuacoes = '10, 20, 40, 6, 30, 5';
//let stringPontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0';

function contaRecordes (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(', ');
    let maiorPontuacao=pontuacoes[0];
    let menorPontuacao=pontuacoes[0];
    let piorJogo = 1;
    let recordes = 0;

    for(let i=1;i<pontuacoes.length;i++){
        if(pontuacoes[i]>maiorPontuacao){
            recordes++;
            maiorPontuacao=pontuacoes[i];
        } else if(pontuacoes[i]<menorPontuacao){
            menorPontuacao = pontuacoes[i];
            piorJogo = i+1;
        }
    }

    console.log(recordes,menorPontuacao);
    //console.log(recordes, maiorPontuacao)
}


//console.log(contaRecordes(stringPontuacoes));
contaRecordes(stringPontuacoes);