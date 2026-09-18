// 3. Filter Numbers Greater Than 10
// Given a list of numbers, use filter to create a new list containing only numbers greater than 10.
// Example:
// Input: [4, 11, 15, 7, 2, 20]
// Output: [11, 15, 20]

let arr = [4, 11, 15, 7, 2, 20];
let new_arr = arr.filter((val) => {
    if(val>10)
        return val;
})

console.log(new_arr);