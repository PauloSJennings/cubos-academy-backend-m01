let diametro = 6;
let raio = diametro / 2


console.log(`O volume de uma esfera de raio ${raio} é ${calculaVolume(raio)} PI`);



function calculaVolume(raio) {
    return (4 / 3) * Math.pow(raio, 3);
}