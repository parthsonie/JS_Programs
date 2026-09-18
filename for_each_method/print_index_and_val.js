// 2. Modify the program to print both the index and the value of each element.
// let fruits = ["Apple", "Banana", "Mango"];
// Output:
//   Index 0: Apple
//   Index 1: Banana
//   Index 2: Mango

let arr = ["Apple", "Banana", "Mango"];

function print(arr){
    let result = arr.forEach((num , i , arr)=> {
        console.log("Index " + arr.indexOf(arr[i]) + ": " + arr[i]);
    });
}

print(arr);