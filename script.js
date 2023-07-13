// Assignment code here

var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWQYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "`~!@#$%^&*()_+<>?/-,.";
var numbers = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  var userChoice = prompt("Select a password length between 8 and 128 characters");
  // var tryAgain = prompt("Make sure to choose a number between 8 and 128 characters"); 
 if (userChoice < 8 || userChoice > 128 || null) {
  alert("Make sure to choose a number between 8 and 128 characters"); 
  return;
} 

 var newPassword = "";

 var addCapital = confirm("Should the password have capital letters?");
 if (addCapital) {
  newPassword += password;
  console.log(addCapital);
  // return newPassword;
 }

 var addLower = confirm("Should the password have lowercase letters?");
 if (addLower) {
  newPassword += password;
  console.log(addLower);
  // return newPassword;
 }

 var addNumbers = confirm("Should the password have numbers?");
 if (addNumbers) {
  newPassword += password;
  console.log(addNumbers);
  // return newPassword;
 }

 var addSpecial = confirm("Should the password have special characters?");
 if (addSpecial) {
  newPassword += password;
  console.log(addSpecial);
  // return newPassword;
 }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
