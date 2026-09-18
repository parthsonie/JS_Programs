// 1. Filter Even Numbers
// Given a list of numbers, use filter to create a new list that contains only the even numbers.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

let arr = [1, 2, 3, 4, 5, 6];
let new_arr = arr.filter((val)=>{
    if(val % 2 == 0)
        return val;
})
console.log(new_arr);