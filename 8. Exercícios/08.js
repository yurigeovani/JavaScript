/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0 */

const multiplicar = (num1, num2) => {
    if(num2==1) return num1;
    return num1+multiplicar(num1,num2-1)
}

console.log(multiplicar(6, 5)) // retornará 30
console.log(multiplicar(0, 7)) // retornará 0 
console.log(multiplicar(6, 6)) // retornará 36
console.log(multiplicar(8, 8)) // retornará 64
console.log(multiplicar(9, 5)) // retornará 45
console.log(multiplicar(7, 5)) // retornará 35