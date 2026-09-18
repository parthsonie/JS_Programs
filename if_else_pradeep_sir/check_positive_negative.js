// 1. Write a program to check if a number is positive, negative, or zero.

let n = 1;
function check(n){
    if(n>0)
        console.log(n+" is positive");
    else if(n<0)
        console.log(n+" is negative");
    else
        console.log("it's a zero");
}
check(n)