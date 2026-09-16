var number = 153;
var original = number;
var result;
var sum = 0;
function check_armstrong(number){
  while(number!=0){
    ld = number % 10;
    number/=10;
    number=Math.floor(number);
    sum+=(ld*ld*ld);
  }
if(original == sum)
  return 1;
else
  return 0;
}

result = check_armstrong(number);

if(result)
  console.log(number + " is an Armstrong number");
else 
  console.log(number + " is not an Armstrong number");


