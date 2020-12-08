console.log(Math.ceil(6.1)); // arredonda para cima

console.log(Math.floor(6.1)); // arredonda para baixo

const obj1 = {}
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola 2'; outra forma de criar atributo
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...')
    };
}

const obj2 = new Obj ('Cadeira');
const obj3 = new Obj ('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);

obj2.exec();
obj3.exec();