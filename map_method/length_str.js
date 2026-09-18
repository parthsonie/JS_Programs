// 3. Length of Each String
// Given a list of words, use map to create a new list containing the length of each word.
// Example:
// Input: ["apple", "banana", "cherry"]
// Output: [5, 6, 6]

let arr = ["apple", "banana", "cherry"];
let newarr = arr.map((val)=>{
    let index = 0;
    let length = 0
    while(index < val.length){
        length++;
        index++;
    }
    return length;
})
console.log(newarr);