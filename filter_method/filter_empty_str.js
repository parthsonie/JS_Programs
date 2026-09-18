// 2. Remove Empty Strings
// Given a list of strings, use filter to remove all empty strings.
// Example:
// Input: ["apple", "", "banana", "", "cherry"]
// Output: ["apple", "banana", "cherry"]

let arr = ["apple", "", "banana", "", "cherry"]
let new_arr = arr.filter((val)=>{
    if(val != 0)
        return val;
})

console.log(new_arr);