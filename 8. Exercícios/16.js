/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.

Exemplos:
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400 */


function checarAnoBissexto1(ano){
    if(ano%4==0){
        if(ano%100==0){
            if(ano%400==0){
                return console.log(true);
            } else {
                return console.log(false);
            }
        } else {
            return console.log(true);
        }
    } else {
        return console.log(false);
    }
}


checarAnoBissexto1(2020) // retornará true
checarAnoBissexto1(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
checarAnoBissexto1(2015)
checarAnoBissexto1(1992)
checarAnoBissexto1(1988)
checarAnoBissexto1(1700)
checarAnoBissexto1(1800)
checarAnoBissexto1(1900)
checarAnoBissexto1(2100)
checarAnoBissexto1(2400)



// Teacher resolution

function checarAnoBissexto2(ano){
    const divisivelPorQuatro = ano%4==0;
    const divisivelPorCem = ano%100==0;
    const divisivelPorQuatrocentos = ano%400==0

    return console.log((divisivelPorQuatro && !divisivelPorCem) || (divisivelPorQuatro && divisivelPorCem && divisivelPorQuatrocentos))
}


console.log('### Teacher resolution 1')

checarAnoBissexto2(2020) // retornará true
checarAnoBissexto2(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
checarAnoBissexto2(2015)
checarAnoBissexto2(1992)
checarAnoBissexto2(1988)
checarAnoBissexto2(1700)
checarAnoBissexto2(1800)
checarAnoBissexto2(1900)
checarAnoBissexto2(2100)
checarAnoBissexto2(2400)