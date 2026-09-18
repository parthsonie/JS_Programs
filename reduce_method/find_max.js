// 3. Find the Maximum Number
//    Given a list of numbers, use reduce to find the maximum number.
//    Example:
//    Input: [4, 5, 1, 9, 2]
//    Output: 9

let arr = [4, 5, 1, 9, 2];
let max = arr.reduce((m,val)=>{
    if(m<val)
        m=val;
    return m;
},0)

console.log(max);