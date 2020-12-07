// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLength() {
  var length = 0;

  var alphabet = /[a-zA-Z]/

  while (length < 8 || length > 128) {
    length = prompt('Choose between 8 and 128 characters for your new password');

  }

  return length;
}

function choices() {
  do {
    
    var upper = confirm("Include uppercase letters?");
    var lower = confirm("Include lowercase letters?");
    var num = confirm("Include numbers?");
    var special = confirm("Include special characters?");
  

  } while ((!upper && !lower && !num && !special))

  var upperCase = {
    array: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    include: upper
  }

  var lowerCase = {
    array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    include: lower
  }

  var numbers = {
    array: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    include: num
  }

  var special = {
    array: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+"],
    include: special
  }

  var characters = [upperCase, lowerCase, numbers, special];

  var passArr;

  
  characters.forEach(type => {
    if (!passArr && type.include) {
      passArr = type.array;

    } else if (passArr && type.include) {
      passArr = passArr.concat(type.array);
      
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
  var passwordArr = choices();


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
