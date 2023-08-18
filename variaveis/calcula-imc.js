const peso = 85;
const altura = 1.66;

console.log(calculaImc(peso, altura));


function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}