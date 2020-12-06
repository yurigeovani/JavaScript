let numero = 1;
{
    let numero = 2;
    console.log('dentro ', numero);
}

console.log('fora ', numero);

/**
 * Var tem escopo GLOBAL e de FUNÇÃO
 * Let tem escopo GLOBAL, de FUNÇAO e de BLOCO
 */