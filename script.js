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
  var userChoice = 0;

  var userChoice = prompt("Select a password length between 8 and 128 characters");
  
 if (userChoice < 8 || userChoice > 128 || null || isNaN(userChoice)) {
  alert("Make sure to choose a number between 8 and 128 characters"); 
  return ("Your password is too short!");
} 

 var newPassword = "";

 var addCapital = confirm("Should the password have capital letters?");
 if (addCapital) {
  newPassword = capitalLetters.concat(newPassword);
 }

 var addLower = confirm("Should the password have lowercase letters?");
 if (addLower) {
  newPassword = lowercaseLetters.concat(newPassword);
 }

 var addNumbers = confirm("Should the password have numbers?");
 if (addNumbers) {
  newPassword = numbers.concat(newPassword);

 }

 var addSpecial = confirm("Should the password have special characters?");
 if (addSpecial) {
  newPassword = specialCharacters.concat(newPassword);
 }


 
 if ( !addCapital , !addLower , !addSpecial , !addNumbers)
  {
    alert(
      "It's not secure to have a blank password!"
    );
    window.location.reload();
  }

 let arr = Array.from(newPassword);
 console.log(arr);
 let result = "";

 for (let i = 0; i < userChoice; i++) {
  result += arr[Math.floor(Math.random() * arr.length)];
 }
 return result;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
