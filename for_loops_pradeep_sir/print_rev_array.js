// 6. Write a loop to print an array in reverse order. Example: [1, 2, 3, 4, 5] should print 5, 4, 3, 2, 1.

let arr = [1, 2, 3, 4, 5];
function print_rev(arr){
    let last_index = arr.length - 1;
    for(let i = last_index ; 0 <= i ; i--){
        console.log(arr[i]);
    }
}
print_rev(arr);