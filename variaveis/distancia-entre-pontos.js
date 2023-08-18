const x1 = 1;
const x2 = 2;
const y1 = 3;
const y2 = 4;


console.log(distancia(x1, x2, y1, y2));


function distancia(x1, x2, y1, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}