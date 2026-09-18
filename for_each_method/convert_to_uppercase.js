// 5. Write a program that converts all names in the given array to uppercase using forEach().
// let names = ["john", "mary", "peter"];
// Output:
//   ["JOHN", "MARY", "PETER"]

let arr = ["john", "mary", "peter"];

function Upercase(arr){
    arr.forEach((num , i ,arr) => {
        arr[i] = arr[i].toUpperCase()
    });
    console.log(arr);
}

Upercase(arr);