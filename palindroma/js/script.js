/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di inserire una parola
var userWord = prompt("Inserisci una parola");
console.log(userWord);
document.getElementById("user_word").innerHTML = "La parola inserita è " + "<span>" + userWord + "</span>";

// Creare una funzione per capire se la parola inserita è palindroma


function isPalindrome(word) {
    
    return word === word.split("").reverse().join("");

}

var palindrome = isPalindrome(userWord);
console.log(palindrome);


if (palindrome == true) {
    
    document.getElementById("result").innerHTML ="<span>" + userWord + "</span> è palindromo";

} else {
    document.getElementById("result").innerHTML ="<span>" + userWord + "</span> non è palindromo";

}




