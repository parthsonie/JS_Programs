// 2. Find an Object by a Key
// Write a function to find the first object in an array with a specific key-value pair.
// Example:
// Input: [{ id: 1, name: "John" }, { id: 2, name: "Alice" }], Key-Value: id=2
// Output: { id: 2, name: "Alice" }

let arr = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
let index = 0;
while(index < (arr.length - 1)){
    if(arr[index].id == 1){
         console.log(arr[index]);
    }
    index++;
    // what happening when we put else for the index++ issue;
}
