// 1. Find the First Even Number
// Given a list of numbers, find the first even number.
// Example:
// Input: [1, 3, 7, 4, 5]
// Output: 4

let arr = [1, 3, 7, 4, 5];

function find_first_even(arr){
    let result = arr.find((val)=>{
        if(val%2==0)
            return val;
    })
    console.log(result);
}

find_first_even(arr);