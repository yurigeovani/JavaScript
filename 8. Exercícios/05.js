/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false */

// Resolução 1
const maiorOuIgual1 = (num1, num2) =>{
    if(num1>num2){
        console.log(true);
    } else if (num1===num2){
        console.log(true);
    } else {
        console.log(false);
    }
}

maiorOuIgual1(0,0);
maiorOuIgual1(0,'0');
maiorOuIgual1(5,1);
maiorOuIgual1(1,5);

// Resolução 2
const maiorOuIgual2 = (num1, num2) =>{
    if(typeof num1 != typeof num2) return false;
    return num1 >= num2;
}

console.log(maiorOuIgual2(0,0));
console.log(maiorOuIgual2(0,'0'));
console.log(maiorOuIgual2(5,1));
console.log(maiorOuIgual2(1,5));