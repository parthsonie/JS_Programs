// 4. Write a program that counts the even and odd numbers in an array using forEach().
// let numbers = [1, 2, 3, 4, 5, 6];
// Output:
//   Even Numbers: 3
//   Odd Numbers: 3

let arr = [1, 2, 3, 4, 5, 6];

function count(arr){
    let even_count = 0;
    arr.forEach((num , i , arr) => {
        if(arr[i] % 2 == 0){
            even_count++;
        }
    });
    console.log("Even Numbers: " + even_count);
    console.log("Odd Numbers: " + (arr.length - even_count));
}

count(arr);