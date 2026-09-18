// 2. Filter Positive Numbers and Convert to Strings
// Given a list of numbers, use filter to keep only positive numbers, then use map to convert them to strings.
// Example:
// Input: [-1, 0, 5, -2, 3]
// Output: ["5", "3"]

let arr = [-1, 0, 5, -2, 3];
let new_arr = arr.filter((val) => {
    if(val>0){
        return val;
    }
        
}).map((val)=>{
    val=String(val)
    return val;
})

console.log(new_arr);