// 7. Write a program to check if a number is a palindrome 
let num = 1001;

function check(num){

    num = String(num);

    let index = 0;
    let last_index = num.length - 1;

    while(index <= last_index){

        if(num[index] != num[last_index]){
            console.log("Not a palindrome");
            return;
        }

        index++;
        last_index--;
    }

    console.log("Palindrome");
}

check(num);