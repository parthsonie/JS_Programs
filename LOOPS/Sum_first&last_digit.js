var number = 5061;
var n = number;
var digits = 0;
while(number >= 1){
  number/=10;
  digits+=1;
}
var First_digit =  n%10;
var Last_digit = Math.floor(n/(10 ** (digits - 1)));

console.log("The sum of First and last digit of the number is : " + (First_digit + Last_digit));
