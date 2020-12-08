let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

--num1;
console.log(num1);

console.log(++num1 === num2--);
console.log(num1===num2);

/**
 * ao executar, o num1, por ser préfixado, teve prioridade na soma e ficou 
 * igual a 2, já o num2 foi pósfixado e teve a comparação quando ainda era 2,
 * somente depois ficou 3.
 */

