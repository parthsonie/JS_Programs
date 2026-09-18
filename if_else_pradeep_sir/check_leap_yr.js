// 5. Write a program to check if a year is a leap year.
var check_ly = 1996

function check(check_ly){
    var last_ly = 2024 

if(((check_ly - last_ly)%4==0 && (check_ly % 100 != 0)) || (check_ly % 400 == 0)){
  console.log("Yes it's a Leap Year");
}
else{
  console.log("It's not a Leap Year");
}
}
check(check_ly);
