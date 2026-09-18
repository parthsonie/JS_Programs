// 3. Find the First Negative Number
// Given a list of numbers, find the first negative number.
// Example:
// Input: [4, 2, -3, -1, 5]
// Output: -3

let arr = [4, 2, -3, -1, 5];

function find_negative(arr){
    let result = arr.find((val)=>{
        if(val < 0)
            return val;
    })
    console.log(result);
}

find_negative(arr);