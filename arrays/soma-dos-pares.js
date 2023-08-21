const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 13, 2, 56];

console.log(somaPares(numeros));

function somaPares(array) {
    let soma = 0;
    for (item of array) {
        if (item % 2 === 0) {
            soma += item;
        }
    }
    return soma;
}