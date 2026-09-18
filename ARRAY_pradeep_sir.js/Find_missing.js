// 5. Find Missing Numbers in a Range
// Given an array of unique numbers within a range, find all missing numbers.
// Example:
// Input: [1, 3, 4, 7], Range: 1-7
// Output: [2, 5, 6]

let arr = [1, 3, 4, 7];

let arr_range = [1, 2, 3, 4, 5, 6, 7];

let missing_arr = [];

let index_arr = 0;
let index_arr_range = 0;

while (index_arr_range < arr_range.length) {

    if (arr[index_arr] != arr_range[index_arr_range]) {

        missing_arr.push(arr_range[index_arr_range]);

        index_arr_range++;

    }
    else {

        index_arr++;
        index_arr_range++;

    }
}

console.log(missing_arr);