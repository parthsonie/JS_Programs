var i = 1;
var n = 2;
var number = 10;
var sum = 0;

function sum_prime(number){
    while(n<=number){
        if(n<2){
        console.log(number + " is not a prime number")
    }
    else{
        i = 2;
        var isprime = true; 
        while(i*i<=n){
            if(n%i == 0){
                isprime = false;
                break;
            }
        i+=1;
        }
    if(isprime){
      sum+=n;
      console.log(n + " is a prime number" + "--> sum till now is : " + sum);
    }   
    else
        console.log(n + " is not a prime number");
    }
    n+=1;
    }
}

sum_prime(number)