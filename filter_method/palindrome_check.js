// 5. Filter Palindromic Words
// Given a list of words, use filter to create a new list containing only palindromic words (words that read the same backward and forward).
// Example:
// Input: ["madam", "racecar", "hello", "world"]
// Output: ["madam", "racecar"]

let arr = ["madam", "racecar", "hello", "world"];

let new_arr = arr.filter((val)=>{
    let r = 1;
    let f = 0;
    let l = val.length - 1;
    while(f<l){
        if(val[f] == val[l]){
            f++;
            l--;
        }
        else{
            r = 0;
            break;
        }
    }
        return r == 1;

})
console.log(new_arr);
