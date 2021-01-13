/* 13) ​ Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function verificaDia(dia){
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Dia útil`);
            break;
            //return `Dia útil`;
        case 1:
        case 7:
            console.log(`Fim de semana`)
            break;
            //return `Fim de semana`;
        default:
            console.log(`Dia inválido`)
            //return `Dia inválido`;
    }
}

verificaDia(1);
verificaDia(2);
verificaDia(3);
verificaDia(6);
verificaDia(7);
verificaDia(9);

/* console.log(verificaDia(1));
console.log(verificaDia(2));
console.log(verificaDia(6));
console.log(verificaDia(7));
console.log(verificaDia(9)); */