//http://www.net-comber.com/charset.html

 var generateBtn = document.querySelector("#generate"); 

const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById("generate");

const randomFunc= {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomChar,
}

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your new password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomChar() {
  const char = "!@#$&()";
  return char[Math.floor(Math.random()*char.length)];
}