// 10. Write a program that finds the smallest of three numbers.

let num1 = 1;
let num2 = 2;
let num3 = 3;

function check(num1,num2,num3){
    if(num1>num2){
        if(num2>num3)
            console.log(num3 + " is smallest among all");
        else   
            console.log(num2 + " is smallest among all");}
    else if(num2>num3){
        if(num3>num1)
            console.log(num1 + " is smallest among all");
        else
            console.log(num3 + " is smallest among all");}
    else if(num3>num1){
        if(num1>num2)
            console.log(num2 + " is smallest among all");
        else 
            console.log(num1 + " is smallest among all");}
}
check(num1,num2,num3);