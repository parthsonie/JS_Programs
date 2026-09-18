// 4. Concatenate All Strings
//    Given a list of strings, use reduce to concatenate them into a single string.
//    Example:
//    Input: ["hello", "world"]
//    Output: "helloworld"

let arr = ["hello", "world"];
let new_str = arr.reduce((str,val)=>{
    str+=val;
    return str
},"")

console.log(new_str);

//done