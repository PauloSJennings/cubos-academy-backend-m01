let a = 5;
let b = 5;
let c = 1;


console.log(delta(a, b, c));


function delta(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}