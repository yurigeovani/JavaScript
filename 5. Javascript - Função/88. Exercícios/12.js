/* 12)​ Faça um algoritmo que calcule o fatorial de um número. */


function calcularFatorial(num){
    if(num==0){
        return 1;
    } else {
        let fatorial = 1;
        for(let i=1;i<=num;i++){
            fatorial*=i;
        }
        return fatorial;
    }
}


console.log(calcularFatorial(5));
console.log(calcularFatorial(0));
console.log(calcularFatorial(10));



function fatorialDoProf (num){
    if(num==0){
        return 1;
    } else {
        return num*(fatorialDoProf(num-1));
    }
}

console.log(fatorialDoProf(3))