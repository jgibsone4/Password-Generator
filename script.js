// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLength() {
  var length = 0;

  var alphabet = /[a-zA-Z]/g

  while (length < 8 || length > 128) {
    length = prompt('Choose between 8 and 128 characters for your new password');

  }

  return length;
}

function charChoices() {
  do {
    
    var charUpper = confirm("Include uppercase letters?");
    var charLower = confirm("Include lowercase letters?");
    var charNum = confirm("Include numbers?");
    var charSpecial = confirm("Include special characters?");
  

  } while ((!charUpper && !charLower && !charNum && !charSpecial))

  var uppercase = {
    array: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    include: charUpper
  }

  var lowercase = {
    array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    include: charLower
  }

  var numbers = {
    array: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    include: charNum
  }

  var special = {
    array: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+"],
    include: charSpecial
  }

  var characters = [uppercase, lowercase, numbers, special];

  var passArr;

  
  characters.forEach(type => {
    if (!passArr && type.include) {
      passArr = type.array;

    } else if (passArr && type.include) {
      passArr = passArr.concat(type.array);
      console.log(passArr);
    }
  });

  return passArr;
}


function randomNumber(length) {
  return Math.floor(Math.random() * length);
}


function generatePassword() {

  var password = "";
  var length = passwordLength();
  var passwordArr = charChoices();


  for (var i = 0; i < length; i++) {
    var randomIndex = randomNumber(passwordArr.length);
    password += passwordArr[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
