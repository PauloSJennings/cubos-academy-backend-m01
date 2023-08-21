const letras = ["e", "A", "a", "B", "C", "E", "e"];
const letras2 = ["A", "a", "B", "C", "L", "z"];


let contador = 0;

for (let letra of letras2) {
    if (letra === 'E' || letra === 'e') {
        contador++;
    }
}

if (contador === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else {
    console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
}
