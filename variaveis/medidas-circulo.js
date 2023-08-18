let raio = 1;

console.log(`Comprimento: ${calculaComprimento(raio)}`);
console.log(`Área: ${calculaArea(raio)}`);


function calculaArea(raio) {
    return Math.PI * Math.pow(raio, 2);
}

function calculaComprimento(raio) {
    return 2 * Math.PI * raio;
}