let montante = 90000;
let tempo = 24;
let capital = 60000;


console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${calculaTaxa(montante, tempo, capital)}%, pois após ${tempo} meses você teve que pagar ${montante} reais`);





function calculaTaxa(montante, tempo, capital) {
    return ((Math.pow(montante / capital, 1 / tempo) - 1) * 100).toFixed(3);
}