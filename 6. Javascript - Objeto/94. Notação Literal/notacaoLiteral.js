const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c} // forma antiga
const obj2 = {a, b, c} // forma atual ES15

console.log(obj1, obj2)

const nomeAtro = 'nota'
const vlrAtro = 7.87

const obj3 = {}
obj3[nomeAtro] = vlrAtro;
console.log(obj3)
 
const obj4 = {[nomeAtro]: vlrAtro}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){
        // ES6
    }
}

console.log(obj5)