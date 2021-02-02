const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // Remove último elemento do array
console.log(pilotos)

pilotos.push('Verstappen'); // Adiciona elemento(s) ao array
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento na primeira posição do array
console.log(pilotos);

// Splice pode adicionar e remover elementos
// adicionar:
pilotos.splice(2,0, 'Bottas', 'Massa'); // À partir da posição 2, adiciona 2 elementos e remove 0
console.log(pilotos);

// remover
pilotos.splice(3,1) // À partir do índice 3, remove 1 elemento.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array, neste caso, à partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // cria um novo array, neste caso, à partir do índice 1 (incluindo o 1) até o 4 (sem incluir o 4)
console.log(algunsPilotos2)