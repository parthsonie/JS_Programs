// 6. Write a program to check if a number is divisible by both 3 and 5.

function check(n){
    if(n%3 == 0 && n%5 ==0){
        console.log(n + " is divisible by both");
    }
    else
        console.log("sorry");
}
check(5);