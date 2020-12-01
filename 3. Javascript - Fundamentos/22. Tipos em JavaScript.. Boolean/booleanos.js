let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;

console.log(!!isAtivo); //se for um inteiro diferente de 0, retorna true, se for 0, retorna false.

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!' ');
console.log(!!'teste'); //qualquer string diferente de vazio retorna true
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));


console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || 'teste'));

let nome = '';
console.log(nome || 'Desconhecido');