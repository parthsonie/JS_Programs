// 4. Check if All Words Are Palindromic
// Given a list of words, check if all words are palindromic.
// Example:
// Input: ["madam", "level", "racecar"]
// Output: True

let arr = ["madam", "level", "racecar"]

function check(arr){
    let result = arr.every((val)=>{
        let index = 0;
        let last_i = val.length - 1;
        while(index <= last_i){
        if(val[index] != val[last_i]){
            return false;
        }
        index++;
        last_i--;
        }
        return true;
    })
    console.log(result);
}

check(arr);