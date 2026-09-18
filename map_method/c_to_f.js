// 2. Convert Temperature from Celsius to Fahrenheit
// Write a function that takes a list of temperatures in Celsius and uses map to convert each one to Fahrenheit.
// Formula: Fahrenheit = Celsius * 9/5 + 32
// Example:
// Input: [0, 20, 100]
// Output: [32.0, 68.0, 212.0]

let arr = [0, 20, 100];
let new_arr = arr.map((val)=> (val*(9/5))+32);
console.log(new_arr);