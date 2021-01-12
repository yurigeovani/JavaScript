/* 11) ​ As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function calcularAnoBissexto (ano) {
    if(ano%4!=0){
        if(ano%400==0){
            return true;
        } else {
            return false;
        }
    } else {
        if(ano%100==0){
            if(ano%400==0){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}


console.log(calcularAnoBissexto(2015))
console.log(calcularAnoBissexto(1992))
console.log(calcularAnoBissexto(1988))
console.log(calcularAnoBissexto(1700))
console.log(calcularAnoBissexto(1800))
console.log(calcularAnoBissexto(1900))
console.log(calcularAnoBissexto(2100))
console.log(calcularAnoBissexto(2400))