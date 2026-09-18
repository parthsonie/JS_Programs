// 5. Check if All Elements in List Are Unique
// Given a list of elements, check if all elements are unique.
// Example:
// Input: [1, 2, 3, 4]
// Output: True

let arr = [1, 2, 3, 4];

function check(arr){
    let element = 0;
    let result = arr.every((val)=>{
        if(element == val){
            return false;
        }
        return true;
    })
    console.log(result);
}

check(arr);