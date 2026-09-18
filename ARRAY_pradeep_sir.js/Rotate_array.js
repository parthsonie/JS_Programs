// 4. Rotate an Array
// Write a function to rotate an array n times to the right.
// Example:
// Input: [1, 2, 3, 4, 5], n = 2
// Output: [4, 5, 1, 2, 3]

let arr = [1, 2, 3, 4, 5];
let n = 2; // no of times we have to rotate
function Rotate(arr , First_index , n){
    for(let i = 1; i<=n;i++){
    let element = arr[arr.length - 1]
    let last_index = arr.length - 1;
while(0 < last_index){
        arr[last_index] = arr[last_index - 1];
        last_index--;
    }
    arr[0]=element;
    console.log(arr);
}
}
    
Rotate(arr , 0 , 2)