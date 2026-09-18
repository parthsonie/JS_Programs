// 1. Square Each Number
// Given a list of numbers, use map to create a new list containing the squares of each number.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

let arr = [1, 2, 3, 4, 5];
let new_arr = arr.map((val)=> val*val)
console.log(new_arr);