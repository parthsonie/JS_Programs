var number = 10004;
var n = number;
var digits = 0;
while(number >= 1){
  number/=10;
  digits+=1;
}
console.log("the last digit of the number is : " + n%10);
console.log("the first digit of the number is : " + Math.floor(n/(10 ** (digits - 1))));
