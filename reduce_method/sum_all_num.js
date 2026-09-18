// 1. Sum of All Numbers
//    Given a list of numbers, use reduce to find the sum of all the numbers.
//    Example:
//    Input: [1, 2, 3, 4, 5]
//    Output: 15

let arr = [1, 2, 3, 4, 5];
let new_arr = arr.reduce((sum,val)=>{
    return sum+val; 
},0)

console.log(new_arr);