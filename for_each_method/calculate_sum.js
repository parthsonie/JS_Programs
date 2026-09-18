// 7. Write a program that calculates the sum of all elements in an array using forEach().
// let numbers = [10, 20, 30, 40];
// Output:
//   Sum: 100

let arr = [10, 20, 30, 40];

function calculate(arr){
    let sum = 0 ;
    arr.forEach((num)=> {
        sum+=num;
    });
    console.log(sum);
}

calculate(arr);