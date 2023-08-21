const filaDeDentro = [];
const filaDeFora = ["Joana", "Roberta", "Jose", "Joao"];


while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    filaDeDentro.push(filaDeFora.shift());
}

console.log(filaDeDentro);
console.log(filaDeFora);

