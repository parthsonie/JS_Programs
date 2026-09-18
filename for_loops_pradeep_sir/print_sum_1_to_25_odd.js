// 5. Write a program to find sum of all odd numbers between 1 to 25.
function print_odd(){
    let sum = 0;
    for(let i = 1 ; i <= 25 ; i++){
        if(i%2 == 1){
            sum+=i;
        }
    }
    console.log(sum)
}
print_odd();