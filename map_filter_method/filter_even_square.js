// 1. Filter Even Numbers and Square Them
// Given a list of numbers, first filter out the even numbers, then square each remaining number.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [4, 16, 36]

let arr = [1, 2, 3, 4, 5, 6];
let new_arr = arr.filter((val)=>{
    if(val % 2 ==0)
        return val;
}).map((val)=> val*=val)

console.log(new_arr);