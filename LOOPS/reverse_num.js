var number = 1492;
var digit = 0;
var sum = 0;
var ld;
var reverse = 0;

function count(number){
  while(number!=0){
    number /= 10;
    number = Math.floor(number);
    digit+=1;
  }
  return digit;
}

function sum_all(number){
  while(number!=0){
    ld = number % 10;
    number/=10;
    number=Math.floor(number);
    sum+=ld;
  }
  return sum;
}

function Rev(number){
  while(number!=0){
    ld = number % 10;
    number /= 10;
    number = Math.floor(number);
    reverse += ld *(10**(digit-1))
    digit-=1;
  }
  reverse/=(10**digit);
  reverse=Math.floor(reverse)
  return reverse;
}

console.log(Rev(number));