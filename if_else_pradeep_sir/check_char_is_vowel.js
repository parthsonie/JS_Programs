// 8. Write a program that checks whether a character is a vowel or consonant.

let character = "a"
function check(character){
    if(character=="a" || character=="e" || character=="i" || character=="o" || character=="u"){
        console.log(character + " is a vowel")
    }
    else
        console.log(character + " is a consonant");
}
check(character);