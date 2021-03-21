const tecnologias = new Map();
tecnologias.set('react', {framework: false});
tecnologias.set('angular', {framework: true});
tecnologias.set('teste', {nome: 'Yuri', idade: 25, morada: {rua: 'A', numero: 123}})

console.log(tecnologias.react) // forma incorreta de acessar
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('teste'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})

console.log(chavesVariadas.size)
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size) // Agora tem apenas 2 porque 1 (Numero) foi deletado

chavesVariadas.set(123, 'a');
chavesVariadas.set (123, 'b');
chavesVariadas.set (456, 'b');
console.log(chavesVariadas)