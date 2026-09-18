// 11. Write a program that assigns a grade based on marks:
// A: 90-100
// B: 70-89
// C: 50-69
// D: 40-49
// F: Below 40

let Score = 48;
if(Score >= 90)
  console.log("You got Grade A");
else if(Score >= 80)
  console.log("You got Grade B");
else if(Score >= 70)
  console.log("You got Grade C");
else if(Score >= 60)
  console.log("You got Grade D");
else if(Score >= 40)
  console.log("You got Grade E");
else if(Score < 40)
  console.log("You got Grade F")