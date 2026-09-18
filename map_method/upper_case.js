// 5. Uppercase Each Word
// Given a list of words, use map to create a new list where each word is in uppercase.
// Example:
// Input: ["hello", "world"]
// Output: ["HELLO", "WORLD"]

let arr = ["hello", "world"];
let new_arr = arr.map((val)=>{
    val=val.toUpperCase ();
    return val;
})
console.log(new_arr);