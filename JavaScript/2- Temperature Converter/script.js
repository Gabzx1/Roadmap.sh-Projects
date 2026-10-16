const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const FahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const formatTemperature = (value, unit) => `${value} ${unit}`;

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));

const celsius = FahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));

const freezingCelsius = FahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));
