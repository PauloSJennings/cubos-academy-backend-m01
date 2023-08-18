const tempF = 64;

console.log(converteCelsius(tempF));


function converteCelsius(tempF) {
    return (tempF - 32) * (5 / 9);
}