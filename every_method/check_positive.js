// 1. Check if All Numbers Are Positive
// Given a list of numbers, check if all numbers are positive.
// Example:
// Input: [1, 2, 3, 4]
// Output: True

let arr = [1, 2, 3, 4];

function check(arr){
    let result = arr.every((val)=> val>0)
    console.log(result);
}
check(arr);