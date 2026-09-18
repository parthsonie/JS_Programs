// Find the Second Largest Number
// Write a function to find the second-largest number in an array.
// Example:
// Input: [10, 20, 30, 40]
// Output: 30

let arr = [10, 20, 30, 40]
let index = 0;
let first = arr[0];
let s_largest = 0

function Find_s_largest(arr){
    while(index < arr.length){
    if(first < arr[index]){
        s_largest = first;
        first = arr[index];
    }
    else if(arr[index]>s_largest && arr[index]<first){
        s_largest = arr[index];
    }
    index++;
}
console.log(s_largest);
}

Find_s_largest(arr);
