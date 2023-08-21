const original = [1, 4, 12, 21, 53, 88, 112, 0, 33, 999, 2];
const pares = [];

for (let item of original) {
    if (item % 2 === 0) {
        pares.push(item);
    }
}

console.log(pares);
