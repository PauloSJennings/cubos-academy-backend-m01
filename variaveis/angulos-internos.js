let lados = 6;


console.log(`Soma dos ângulos internos: ${somaAngulosInternos(lados)}`);
console.log(`Valor dos ângulos internos: ${somaAngulosInternos(lados) / lados}`);

function somaAngulosInternos(lados) {
    return (lados - 2) * 180;
}