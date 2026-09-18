// 2. Product of All Numbers
//    Given a list of numbers, use reduce to find the product of all the numbers.
//    Example:
//    Input: [1, 2, 3, 4]
//    Output: 24

let arr = [1, 2, 3, 4];
let prod = arr.reduce((product,val)=>{
    return product*val;
},1)
console.log(prod);