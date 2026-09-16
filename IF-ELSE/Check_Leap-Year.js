var Last_LY = 2024 
var Check_LY = 1996
if(((Check_LY - Last_LY)%4==0 && (Check_LY % 100 != 0)) || (Check_LY % 400 == 0)){
  console.log("Yes it's a Leap Year");
}
else{
  console.log("It's not a Leap Year");
}