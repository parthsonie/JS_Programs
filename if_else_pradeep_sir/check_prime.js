// 9. Write a program that checks whether a number is prime.

let number = 9;

function check_prime(number){
  let i = 2;
  if(number<2){
    console.log("it's not a prime number");
    return;
  }
  while((i*i)<=number){
    if(number % i == 0){
      console.log("it's not a prime")
        break;
    }
    i+=1;
  }
  console.log("it's a prime")
}

check_prime(number);