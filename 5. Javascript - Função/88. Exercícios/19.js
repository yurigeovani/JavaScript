/* 19) ​ O cardápio de uma lanchonete é o seguinte:

        Código  Descrição do Produto    Preço
        100     Cachorro Quente         R$ 3,00
        200     Hambúrguer Simples      R$ 4,00
        300     Cheeseburguer           R$ 5,50
        400     Bauru                   R$ 7,50
        500     Refrigerante            R$ 3,50
        600     Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */



const cupom = (cod, qtd) => {
    switch (cod) {
        case 100:
            return `R$ ${3*qtd}`;
        case 200:
            return `R$ ${4*qtd}`;
        case 300:
            return `R$ ${5.5*qtd}`;
        case 400:
            return `R$ ${7.5*qtd}`;
        case 500:
            return `R$ ${3.5*qtd}`;
        case 600:
            return `R$ ${2.8*qtd}`;
        default:
            return 'Produto não existente.';
    }
}


console.log(cupom(100,3))
console.log(cupom(200,2))
console.log(cupom(300,4))
console.log(cupom(400,6))
console.log(cupom(500,5))
console.log(cupom(600,8))
console.log(cupom(700,3))
