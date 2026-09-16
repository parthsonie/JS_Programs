var number = 5; 
var product =1;
function factorial(number){
  while(number!=0){
  product*=number;
  number-=1;
}
  return product;
}
console.log(factorial(number));