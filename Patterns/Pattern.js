function pattern_1(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
      for(var j = 1 ; j<=i ; j++)
        row+="*";
    console.log(row);
}
} 

function pattern_2(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--)
      row+="*"
    console.log(row)
  }
}

function pattern_3(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
      for(var j = 1 ; j<=i ; j++)
        row+="*";
    console.log(row);
}
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--)
      row+="*"
    console.log(row)
  }
}

function pattern_4(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--)
      row+=" "
      for(var k=1 ; k<=i ; k++){
        row+="*"
      }
    console.log(row);
  }
}

function pattern_5(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
      for(var j = 1 ; j<=i ; j++)
        row+=" ";
        for(k = 5 ; k>=i ; k--)
          row+="*";
    console.log(row);
  }
}

function pattern_6(){
for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--)
      row+=" "
      for(var k=1 ; k<=i ; k++){
        row+="*"
      }
    console.log(row);
  }
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
      for(var j = 1 ; j<=i ; j++)
        row+=" ";
        for(k = 5 ; k>=i ; k--)
          row+="*";
    console.log(row);
  }
}

function pattern_7(){
  for(var i = 1 ; i<=5 ; i++){
    var row="";
    for(var j =1 ; j<=5 ; j++){
      if(i==1 || j==1 || i==5 || j==5)
        row+="*"
      else
        row+=" "
    }
    console.log(row);
  }
}

function pattern_8(){
   for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*i)-1) ; k++){
       row+="*";
    }
     console.log(row);
  }
}

function pattern_9(){
  var n = 5;
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 1 ; j<=i ; j++){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*n)-1) ; k++){
       row+="*";
    }
    n--;
     console.log(row);
  }
}

function pattern_10(){
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 5 ; j>=i ; j--){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*i)-1) ; k++){
       row+="*";
    }
     console.log(row);
  }
   var n = 5;
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 1 ; j<=i ; j++){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*n)-1) ; k++){
       row+="*";
    }
    n--;
     console.log(row);
  }
}

function pattern_11(){
  for(var i = 1 ; i<=5 ; i++){
    var row="";
    for(var j =1 ; j<=5 ; j++){
        row+="*";
    }
    console.log(row);
  }
}

function pattern_12(){
   for(var i = 1 ; i<=3 ; i++){
    var row ="";
    for(var j = 2 ; j>=i ; j--){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*i)-1) ; k++){
       row+="*";
    }
     console.log(row);
  }
  for(var i = 1 ; i<=5 ; i++){
    var row="";
    for(var j =1 ; j<=5 ; j++){
      if(i==1||j==1||i==5||j==5)
        row+="*";
      else
        row+=" ";
    }
    console.log(row);
  }
  var n = 5;
  for(var i = 1 ; i<=5 ; i++){
    var row ="";
    for(var j = 2 ; j<=i ; j++){
      row+=" ";
    }
    for(var k = 1 ; k<=((2*n)-5) ; k++){
       row+="*";
    }
    n--;
     console.log(row);
  }
}

function pattern_13(){
  var n = 5;

  for(var i = 1; i<=n ;i++){
    var row = "";
    for(var j =  1; j<=i ; j++){
      row+="*";
    }
    for(var k = 1  ; k<=2*(n-i) ; k++){
        row+=" ";
    }
    for(var l = 1 ; l<=i ; l++){
        row+="*";
    }
    console.log(row);
  }
  for(var i = n; i>=1 ;i--){
    var row = "";
    for(var j =  1; j<=i ; j++){
      row+="*";
    }
    for(var k = 1  ; k<=2*(n-i) ; k++){
        row+=" ";
    }
    for(var l = 1 ; l<=i ; l++){
        row+="*";
    }
    console.log(row);
  }
}


pattern_13();