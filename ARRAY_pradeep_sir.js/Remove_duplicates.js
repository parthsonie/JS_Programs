// 3. Remove Duplicates
// Write a function to remove duplicate elements from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 4, 4, 5] ; 
let new_arr = [];
let i = 0;
let index = 0;

while(index < arr.length){
    if(arr[index] != arr[index + 1]){
        new_arr.push(arr[index]);
    }
    index++;
}
console.log(new_arr);