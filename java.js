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

//Here we ask the mployee if they are ready to selected password criteria
/* var generate = confirm("Are you ready to select password criteria?"); */
/* 
function myFunction() {
    document.getElementById("generate").onclick;
} */

document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var generate = prompt("Start");
    alert (generate);
}

var whenClicked = prompt("Choose password criteria");
var passwordLength = prompt("Choose password length must be between 8 - 128 characters");
var Criteria = prompt("Next select from the following criteria");
var characterTypes = prompt("You will now select from the following password criteria, must select at least one");
var lowerCase = prompt("Include lower case letters?");
var upperCase = prompt("Include lower upper letters?");
var numberic = prompt("Include numbers?");
var specialCharacters = prompt("Include special Characters?");

//Here if the employee is ready to start the process we run the following code block.
if (whenClickedButton) {
    alert(whenClicked);
}

if (whenClicked) {
        alert(passwordLenth);
}

if (characterTypes) {
        alert(lowerCase);
}


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
