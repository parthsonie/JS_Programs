// 4. Filter Objects by Key Value
// Write a function to filter objects in an array where a specific key matches a given value.
// Example:
// Input: [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }], Key: active=true
// Output: [{ id: 1, active: true }, { id: 3, active: true }]

let arr = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];
let arr_filtered = [];
function filter(arr , arr_filtered){
    let index = 0;
while(index<arr.length){
    if(arr[index].active == true){
        arr_filtered.push(arr[index]);
    }
    index++;
}
console.log(arr_filtered);
}
filter(arr,arr_filtered);