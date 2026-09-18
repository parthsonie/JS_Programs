// 3. Filter Words of Specific Length and Convert to Uppercase
// Given a list of words and a specific length, use filter to keep only words of that length, then convert each to uppercase.
// Example:
// Input: ["apple", "fig", "banana", "kiwi"], Length: 5
// Output: ["APPLE"]
let length = 5;
let arr = ["apple", "fig", "banana", "kiwi"];
let new_arr = arr.filter((val)=>{
    if(val.length == 5){
        return val;
    }
}).map((val)=>{
    val=val.toUpperCase()
    return val;
})

console.log(new_arr);