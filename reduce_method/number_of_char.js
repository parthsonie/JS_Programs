// 5. Count the Total Number of Characters
//    Given a list of words, use reduce to calculate the total number of characters across all words.
//    Example:
//    Input: ["apple", "banana", "kiwi"]
//    Output: 15
var char = 0;
let arr = ["apple", "banana", "kiwi"];
let total_char = arr.reduce((sum,val)=>{
    sum+=val.length;
    return sum
},0)

console.log(total_char);