// 2. Check if All Words Start with the Same Letter
// Given a list of words, check if all words start with the letter 'a'.
// Example:
// Input: ["apple", "avocado", "apricot"]
// Output: True

let arr = ["apple", "avocado", "apricot"];

function check(arr){
    let result = arr.every((val)=>{
        if(val[0] == "a")
            return val;
    })
    console.log(result);
}

check(arr);