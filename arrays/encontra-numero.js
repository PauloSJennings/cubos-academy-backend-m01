const numeros = [54, 22, 10, 14, 87, 284];


let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('-1');
}