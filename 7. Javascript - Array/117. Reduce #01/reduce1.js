const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(anterior,atual){
    console.log(anterior,atual)
    return anterior+atual;
}) 

const resultado2 = alunos.map(a=>a.nota).reduce(((a,b)=>a+b),20) // definindo um valor inicial

console.log(resultado)
console.log(resultado2)