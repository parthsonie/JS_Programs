// Reverse an Array
// Write a function to reverse an array without using built-in methods.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5]
let index = arr.length - 1;
let new_arr = []

function Reverse_array(arr){
    while(0<=index){
        new_arr.push(arr[index]);
        index--;
    }
    console.log(new_arr);
}

Reverse_array(arr);