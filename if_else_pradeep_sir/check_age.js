// 2. 1) Let us write our first program based on conditions. Write a program to input user age and check if he is eligible to vote in India or not. A person in India is eligible to vote if he is 18+.

let age = 18;

function check(age){
    if(age>=18)
        console.log("Yes you are eligible for voting");
    else
        console.log("No you are not eligible");
}

check(age);