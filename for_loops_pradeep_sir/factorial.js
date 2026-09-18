// 8. Write a loop to calculate the factorial of a number (e.g., 5! = 120).
var n = 5; 
var p =1;
function factorial(n){
  while(n!=0){
  p*=n;
  n-=1;
}
  return p;
}
console.log(factorial(n));