var number = 40585;
var original = number ; 
var digit = 0;
var sum = 0;
var product = 1;
var ld;

function strong(number){
    sum = 0;

  while(number!=0){
    ld = number % 10;
    number/=10;
    number=Math.floor(number);
    sum+=factorial(ld);
  }
  return sum;
}

function factorial(ld){
  product = 1;
  while(ld!=0){
  product*=ld;
  ld-=1;
}
  return product;
}
while(original <= target){
if(original == strong(number))
  console.log(original + " is a strong number");

number+=1;
}