const pop = 1000;
const x = 4;
const tempo = 7;

console.log(simuladorCovid(pop, x, tempo));


function simuladorCovid(pop, x, tempo) {
    return pop * (Math.pow(x, tempo / 7));
}