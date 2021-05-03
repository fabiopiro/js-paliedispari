/*
Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// L'utente sceglie pari o dispari...
var userChoice = prompt("Scegli pari o dispari");
console.log("Hai scelto:", userChoice);
document.getElementById("user_choice").innerHTML = "Hai scelto " + "<span>" + userChoice + "</span>"

if (userChoice == "pari") {
    userChoice = true;
} else {
    userChoice = false
}

console.log("pari?", userChoice);


// ...e inserisce un numero da 1 a 5.
var userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));
console.log("Tuo Numero", userNumber);
document.getElementById("user_number").innerHTML = "Hai scelto " + "<span>" + userNumber + "</span>"


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    
    return Math.floor(Math.random() * 5 + 1);

}

var computerNumber = randomNumber();
console.log("Numero del Computer: ", computerNumber);
document.getElementById("computer_number").innerHTML = "Il computer ha scelto " + "<span>" + computerNumber + "</span>"


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isSumEven(numUno, numDue) {
    
    sum = numUno + numDue;
    
    if ((sum % 2) == 0) {
        return true;
    } else {
        return false;
    }

}

sumUserComputer = isSumEven(userNumber, computerNumber);
console.log("La somma dei due numeri è", sum);
document.getElementById("number_sum").innerHTML = "La somma dei 2 numeri è: " + "<span>" + sum + "</span>"

console.log(sum + " è pari? " + sumUserComputer);


// Dichiariamo chi ha vinto.
if (userChoice == sumUserComputer) {
    console.log("HAI VINTO!");

} else {
    console.log("HAI PERSO!");
}