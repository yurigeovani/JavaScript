const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // mostra as chaves(atributos) do objeto
console.log(Object.values(pessoa)); // mostra os valores do objeto
console.log(Object.entries(pessoa)); // mostra uma lista, um array com todos os subarrays com chave e valor

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', { //pode definir características de uma propriedade.
    enumerable: false, // se ela será listada ou não
    writable: false, // propriedade que não permite ser alterada
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015 | ES6)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2) //atribui ao obj os valores de dest, o1, o2 ...

console.log(obj)

Object.freeze(obj);
obj.c = 1234;

console.log(obj)