// 4. Words Starting with a Specific Letter
// Given a list of words and a specific letter, use filter to create a new list with only the words that start with that letter.
// Example:
// Input: ["apple", "banana", "avocado", "berry"], Letter: 'a'
// Output: ["apple", "avocado"]

let arr = ["apple", "banana", "avocado", "berry"];
let new_arr = arr.filter((val)=>{
    if(val[0] == "a")
        return val;
})
console.log(new_arr);