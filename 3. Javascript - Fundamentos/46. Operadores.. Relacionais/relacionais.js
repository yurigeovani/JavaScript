console.log('01) ', '1' == 1); // true porque compara valor
console.log('02) ', '1' === 1); // false porque compara valor e tipo
console.log('03) ', '3' != 3) // false porque compara valor
console.log('04) ', '3' !== 3) // true porque compara valor e tipo

console.log('05) ', 3 < 2);
console.log('06) ', 3 > 2);
console.log('07) ', 3 <= 2);
console.log('08) ', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09) ', d1 === d2); // false porque compara endereço de memória
console.log('10) ', d1 == d2); // false porque compara endereço de memória
console.log('11) ', d1.getTime()===d2.getTime()); // true porque compara os valores numbers e possuem mesmo tipo

console.log('12) ', undefined == null); // true porque não possuem valor
console.log('13) ', undefined === null); // false porque possuem mesmo valor mas tipos diferentes