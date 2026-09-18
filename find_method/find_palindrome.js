// 4. Find the First Palindromic Word
// Given a list of words, find the first word that is a palindrome.
// Example:
// Input: ["apple", "level", "banana", "civic"]
// Output: "level"

let arr = ["apple", "level", "banana", "civic"]

function find_palindrome(arr){
    let result = arr.find((val)=>{
        let index = 0
        let last_index = val.length - 1;
        while(index <= last_index){
            if(val[index] != val[last_index]){
                return false;
            }
            index++;
            last_index--;
        }
        return true;
    })
    console.log(result + " is palindrome");
}

find_palindrome(arr);