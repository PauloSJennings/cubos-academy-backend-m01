const capital = 5000;
const taxa = 5;
const tempo = 10;


console.log(calculaJuros(capital, taxa, tempo));


function calculaJuros(capital, taxa, tempo) {
    return capital * (Math.pow(1 + (taxa / 100), tempo));
}