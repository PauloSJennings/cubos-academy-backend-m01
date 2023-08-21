const numeros = [40, 100, 8, 11, 47, 4, 1, 12];


console.log(maiorNumero(numeros) - menorNumero(numeros));



function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

function menorNumero(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    return menor;
}