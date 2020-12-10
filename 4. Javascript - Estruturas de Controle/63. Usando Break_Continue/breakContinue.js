const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums){
    if(x==5) {
        break;
    }
    console.log(`Break indice ${x} = ${nums[x]}`)
}

for(y in nums){
    if(y==5) continue
    console.log(`Continue indice ${y} = ${nums[y]}`)
}

externo: // não usar esta extrutura
for (a in nums){
    for(b in nums){
        if(a==2 && b==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!');