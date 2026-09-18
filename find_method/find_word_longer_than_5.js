// 2. Find the First Word Longer Than 5 Characters
// Given a list of words, find the first word that is longer than 5 characters.
// Example:
// Input: ["apple", "banana", "kiwi", "grapefruit"]
// Output: "banana"

let arr = ["apple", "banana", "kiwi", "grapefruit"];

function find_word(arr){
    let result = arr.find((val)=>{
        if(val.length > 5)
            return val;
    })
    console.log(result);
}

find_word(arr);