const nomes = ["Ana", "Joana", "Carlos", "amanda", "Alice", "alberto", "Paulo"];
const novoArray = [];



for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === 'A' || nomes[i][0] === 'a') {
        novoArray.push(nomes[i]);
    }
}

console.log(novoArray);

