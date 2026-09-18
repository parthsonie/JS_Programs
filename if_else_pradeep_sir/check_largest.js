// 3. Write a program to find the largest of three numbers.

let a = 1;
let b = 2; 
let c = 3;
function check(a,b,c){
    if(a>b && a>c)
        console.log(a + " is the largest among all");
    else if(b>c && b>a)
        console.log(b + " is largest among all");
    else 
        console.log("c is largest among all");
}

check(a,b,c);