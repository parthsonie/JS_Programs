// 5. Calculate the Total of a Property
// Write a function to calculate the sum of a specific property in an array of objects.
// Example:
// Input: [{ price: 10 }, { price: 20 }, { price: 30 }], Key: price
// Output: 60

let arr = [{ price: 10 }, { price: 20 }, { price: 30 }] ;

function total_of_property(arr){
let total = 0; 
let index = 0;
while(index < arr.length){
    total += arr[index].price;
    index++;
}
console.log(total);
}
total_of_property(arr);