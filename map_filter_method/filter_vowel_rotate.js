// 5. Filter Words That Start with a Vowel and Reverse Them
// Given a list of words, use filter to keep only words that start with a vowel, then use map to reverse each of those words.
// Example:
// Input: ["apple", "banana", "orange", "grape"]
// Output: ["elppa", "egnaro"]

let arr = ["apple", "banana", "orange", "grape"];

let new_arr = arr.filter((val)=>{
    if(val[0] == "a" || val[0] == "e" || val[0] == "i" || val[0] == "o" || val[0] == "u"){
        return val;
    }
}).map((val)=>{
    val=val.split("").reverse().join("");
    return val;
})

console.log(new_arr);