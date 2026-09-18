// 7. Write a loop to print the multiplication table of 5.
let n = 5;
function multiplication_table(n){
    for(let i = 1; i<=10 ; i++){
        console.log(n + " * " + i + " = " + n*i);
    }
}

multiplication_table(n);