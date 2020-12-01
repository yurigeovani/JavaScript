const peso1 = 1.0
const peso2 = Number('2.5');

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871;
const avaliacao2 = 6.817;

const total = avaliacao1*peso1 + avaliacao2 * peso2;

const media = total / (peso1+peso2);

console.log(media.toFixed(2)); // arredonda(ou trunca) a dízima para a quantidade de casas desejadas
console.log(media.toString(2)); // em binário

console.log(typeof media);

let a = '8'
console.log('a = ' + a + ', '  + typeof a);

a /= 2;
console.log('a = ' + a + ', '  + typeof a);