const escola = "Cod3r";

console.log('escola.charAt(4): ' + escola.charAt(4)); //mostra o caractere da posição 4
console.log('escola.charAt(5): ' + escola.charAt(5)); //mostra o caractere da posição 5 (retornará vazio pois não tem posição 5)
console.log('escola.charCodeAt(3): ' + escola.charCodeAt(3)); //mostra o equivalente à tabela Unicode
console.log('escola.indexOf(\'r\'): ' + escola.indexOf('r')); //mostra o índice do caractere r

console.log('escola.substring(1): ' + escola.substring(1)); // imprime o objeto a partir da posição 1
console.log('escola.substring(1,3): ' + escola.substring(1,3)); // Inicia no primeiro parâmetro e vai até o segundo parâmetro, sem incluí-lo.
console.log('escola.substr(1,3): ' + escola.substr(1,3)); // Inicia no primeiro parâmetro e percorre até o índice informadas no segundo parâmetro.

console.log('Concatenação: ' + `Escola ` .concat(escola).concat("!")); // formas de escrever String, usando case, aspas dupla ou aspas simples
console.log('escola.replace(/\\d/, \'e\'): ' + escola.replace(/\d/, 'e')); //expressão RegExr (regex): substitui somente os dígitos pela letra e
console.log('escola.replace(/\\w/g, \'e\'): ' + escola.replace(/\w/g, 'e')); //expressão RegExr (regex): substitui tudo por e
console.log('escola.replace(\'d\',\'e\'): ' + escola.replace('d', 'e')); // procura e substitui o caractere d por 'e'

console.log('Criando array com .split: ' + 'Ana,Maria,Pedro'.split(',')); // cria um array utilizando o separador informado no parâmetro