// Assignment Code
var generateBtn = document.querySelector("#generate");

<<<<<<< HEAD
//onclickk added
document.getElementById("generate").onclick = function () { alert("Welcome, you will select your password criteria in the following prompts"); };

// Add event listener to the generate button
document.getElementById("generate").addEventListener("click", function(){

//setting variables
    var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
    var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var number = ("0123456789");
    var specialEl = ("!@#$%^&*()?~/|:'><");
    var password = "";
    var selectEl = "";
    var length = prompt("Make your selection between 8 and 128 characters");
=======
document.getElementById("generate").onclick = function () { alert("Welcome, you will select your password criteria in the following prompts"); };

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
>>>>>>> 60f751cbe69c24680f2ea9b09aae09c74eedf746
  
    if (length < 8 || length > 128){
      alert("You must select a length betwen 8 and 128 characters")
      return
    }
  
    var lowerVar = confirm("Select if you want lowercase")
    var upperVar = confirm("Select if you want uppercase")
    var numberVar = confirm("Select if you want numbers")
    var specialVar = confirm("Select if you want special characters")
    var verify = 0;
  
    if (lowerVar == true || upperVar == true || numberVar == true || specialVar == true) {
      verify += 1;
    }
  
    if (verify == 0) {
      alert("You have not selected a character Type, Please Try again.")
      return
    }
  
    function generatePWD() {
      for (var i = 0; i <= length; i++) {
        password = password + selectEl.charAt(Math.floor(Math.random() * Math.floor(selectEl.length - 1)));
      }
    }
  
    if (lowerVar && !upperVar && !numberVar && !specialVar) {
      selectEl = lowerCase;
      generatePWD();
    }

    else if (lowerVar && upperVar && !numberVar && !specialVar) {
      selectEl = lowerCase + upperCase;
      generatePWD();
    }
  
  
    else if (lowerVar && upperVar && numberVar && !specialVar) {
      selectEl = lowerCase + upperCase + number;
      generatePWD();
    }
  
    else if (lowerVar && upperVar && numberVar && specialVar) {
      selectEl = lowerCase + upperCase + number + specialEl;
      generatePWD();
    }
 
    else if (lowerVar && !upperVar && numberVar && !specialVar) {
      selectEl = lowerCase + number;
      generatePWD();
    }

    else if (lowerVar && !upperVar && numberVar && specialVar) {
      selectEl = lowerCase + number + specialEl;
      generatePWD();
    }
  
    else if (lowerVar && !upperVar && !numberVar && specialVar) {
      selectEl = lowerCase + specialEl;
      generatePWD();
    }

    else if (!lowerVar && upperVar && !numberVar && !specialVar) {
      selectEl = upperCase;
      generatePWD();
    }
  
    else if (!lowerVar && upperVar && numberVar && !specialVar) {
      selectEl = upperCase + number;
      generatePWD();
    }
  
    else if (!lowerVar && upperVar && numberVar && specialVar) {
      selectEl = upperCase + number + specialEl;
      generatePWD();
    }

    else if (!lowerVar && upperVar && !numberVar && specialVar) {
      selectEl = upperCase + specialEl;
      generatePWD();
    }
  
    else if (!lowerVar && !upperVar && numberVar && !specialVar) {
      selectEl = number;
      generatePWD();
    }
  
    else if (!lowerVar && !upperVar && numberVar && specialVar) {
      selectEl = number + specialEl;
      generatePWD();
    }
  
    else if (!lowerVar && !upperVar && !numberVar && specialVar) {
      selectEl = specialEl;
      generatePWD();
    }
    document.getElementById("password").innerHTML = password;
    console.log(password);
  
  });
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

