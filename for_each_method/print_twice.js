// 3. Modify each element in the given array to be twice its original value using forEach().
// let numbers = [2, 4, 6, 8];
// Output:
//   [4, 8, 12, 16]

let arr = [2, 4, 6, 8];

function print(num){
        arr.forEach((num , i , arr) => {
        arr[i]*=2;
    });
    console.log(arr);
}

print(arr);