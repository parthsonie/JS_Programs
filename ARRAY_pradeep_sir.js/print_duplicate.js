// 3. Remove Duplicates
// Write a function to remove duplicate elements from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

let arr = [1, 2, 4, 8, 2, 4, 2, 3, 4, 4, 5, 5, 1, 8, 6];
let arr1 = []

function remove_duplicate(arr) {
    let repeat = 0
    arr = arr.sort()
    let index = 0;
    let l_index = arr.length - 1;
    while (index <= l_index) {
        if (arr[index] == arr[index + 1]) {
            repeat++;
        }
        if (arr[index] != arr[index + 1]) {
            if (repeat != 0) {
                console.log(arr[index] + " - removed --> " + repeat + " times");
            }
            repeat = 0;
            arr1.push(arr[index]);
        }
        index++;
    }

    console.log(arr1);
    console.log("final array");
}

remove_duplicate(arr);

