let r = 3;
let h = 1;


console.log(`Área do cilindro: ${areaCilindro(r, h)}pi`);


function areaCilindro(r, h) {
    return 2 * r * (r + h);
}