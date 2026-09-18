// 5. Find the First Prime Number
// Given a list of numbers, find the first prime number.
// Example:
// Input: [4, 6, 9, 7, 10]
// Output: 7

let arr = [4, 6, 9, 7, 10];

function find_prime(arr){
    let result = arr.find((val)=>{
         let i = 2;
        if(val<2){
            return false;
        }
        while((i*i)<=val){
            if(val % i == 0){
                return false;
            }
            i++;
        }
        console.log(val + " <---------- It's a prime");
        return true;
    })
}

find_prime(arr);