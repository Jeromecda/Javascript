// Créer un programme console en javascript qui permet de faire les conversions entre degrés celsius et degrés fahrenheit

let degreCelsius = 26;
let degreFahrenheit = 60;

function convertCelsiusToFahrenheit(degreCelsius) {
    degreFahrenheit = degreCelsius * 1.8 + 32;
    return degreFahrenheit;
}

function convertFahrenheitToCelsius(degreFahrenheit) {
    degreCelsius = (degreFahrenheit -32) / 1.8;
    return degreCelsius;
}

console.log("Température en degré Fahrenheit : " + convertCelsiusToFahrenheit(degreCelsius).toFixed(2));
console.log("Température en degré Celsius : " + convertFahrenheitToCelsius(degreFahrenheit).toFixed(2));