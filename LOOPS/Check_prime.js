var number = 9;
var i = 2;
function check_prime(number){
  if(number<2)
  console.log("it's not a prime number");
  return 0;
  while((i*i)<=number){
    if(number % i == 0){
      console.log("it's not a prime")
        return 0;
    }
    i+=1;
  }
  console.log("it's a prime")
}
check_prime(number);