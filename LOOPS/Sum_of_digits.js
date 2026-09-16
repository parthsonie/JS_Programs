var number = 1439;
var digit = 0;
var sum = 0;
var ld;

function sum_all(number){
  while(number!=0){
    ld = number % 10;
    number/=10;
    number=Math.floor(number);
    sum+=ld;
  }
  return sum;
}
console.log(Math.floor(sum_all(number)));