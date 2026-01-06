//Assignment 1: Daily Temperature Analyzer
//Scenario : You are analyzing daily temperatures recorded by a weather app.

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//filter() → temperatures above 35°C
const above35 = temperatures.filter(temp => temp > 35);

//map() → convert Celsius to Fahrenheit
const fahrenheitTemps = temperatures.map(
  temp => (temp * 9/5) + 32
);

//reduce() → calculate average temperature (Celsius)
const averageTemp =
  temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

//find() → first temperature above 40°C
const firstAbove40 = temperatures.find(temp => temp > 40);

//findIndex() → index of temperature 28°C
const indexOf28 = temperatures.findIndex(temp => temp === 28);

// Output 
console.log("Temperatures above 35°C:", above35);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);
console.log("Average Temperature:", averageTemp);
console.log("First temperature above 40°C:", firstAbove40);
console.log("Index of temperature 28°C:", indexOf28);
