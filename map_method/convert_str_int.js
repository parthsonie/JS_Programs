// 4. Convert Strings to Integers
// Given a list of strings representing numbers, use map to convert them to integers.
// Example:
// Input: ["1", "2", "3"]
// Output: [1, 2, 3]

let arr = ["1", "2", "3"];
let new_arr = arr.map((val)=>{
    val=parseInt(val);
    return val;
})
console.log(new_arr);
