// 1. Write a program that prints each element of the given array using forEach().
// let numbers = [5, 10, 15, 20, 25];
// Output:
//   5
//   10
//   15
//   20
//   25

let arr = [5, 10, 15, 20, 25];

function print(arr){
    let result = arr.forEach((num ,i , arr)=> {
        num = 0; 
        console.log(arr[i]);
    });
}

print(arr);