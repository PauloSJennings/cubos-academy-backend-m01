const arrayA = [1, 3, 3, 44, 11, 4, 500, 0, 200];
const arrayB = [57, 4, 21, 32, 13, 56, 7, 49, 0];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
}

