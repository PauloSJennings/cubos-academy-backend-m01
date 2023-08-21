const numeros = [53, 3, 24, 1, 8, 11, 7, 15, 30];


console.log(maiorNumero(numeros));



function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}
