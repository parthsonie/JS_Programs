// 16. Write a loop to print numbers from 1 to 50, but:
//   Print "Fizz" for multiples of 3.
//   Print "Buzz" for multiples of 5.
//   Print "FizzBuzz" for multiples of both 3 and 5.

function print_special(){
    for(let i=1 ; i<=50 ; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Buzz");
        }
        else if(i%5 == 0){
            console.log("Fizz")
        }
        else
            console.log(i);
    }
}
print_special();