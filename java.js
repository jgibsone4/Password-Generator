// Assignment Code
/* var generateBtn = document.querySelector("#generate"); */
/* http://www.net-comber.com/charset.html */
/* Special Characters */ 
/* var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"; */
//Functions

/* function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);

}

funciton getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);

} */
/* 
console.log(Math.floor(Math.random() *26 +97); */

var whenClicked = alert("Choose password criteria");
var passwordLength = prompt("Choose password length must be between 8 - 128 characters");
var Criteria = alert("Next select the following criteria");
var characterTypes = prompt("Select the following password criteria");
var lowerCase =
var upperCase =
var numberic =
var specialCharacters = 

/* if 1 seleciton is not selected
    alert("You must select at least one character type"
    )

    start OverconstrainedError

    When prompts answered then a password is generatePassword

    and displayed on prompt or page */


/* alert("Choose" + passwordLength); */


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
