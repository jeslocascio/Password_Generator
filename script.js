// Assignment code here

// Sets variables for different character sets
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

// Generate a password based on user preferences
var generatePassword = function() {
  var userChoice = 0;

  // Uses a prompt to set the length of a password between 8 and 128 characters
  var userChoice = prompt("Select a password length between 8 and 128 characters");

  // Checks if the inputed character meets the criteria
  if (userChoice < 8 || userChoice > 128 || null || isNaN(userChoice)) {
    // Displays an alert if the inputed character doesn't meet the criteria
    alert("Make sure to choose a number between 8 and 128 characters");
    return ("Your password didn't meet the criteria!");
  }

  // Creates an empty string as the basis for the new password
  var newPassword = "";

  // Asks the user if the password should include capital letters
  var addCapital = confirm("Should the password have capital letters?");
  if (addCapital) {
    // Adds capital letters to the potential character pool
    newPassword = capitalLetters.concat(newPassword);
  }

  // Asks the user if the password should include lowercase letters
  var addLower = confirm("Should the password have lowercase letters?");
  if (addLower) {
    // Adds lower letters to the potential character pool
    newPassword = lowercaseLetters.concat(newPassword);
  }

  // Asks the user if the password should include numbers
  var addNumbers = confirm("Should the password have numbers?");
  if (addNumbers) {
   // Adds numbers to the potential character pool
    newPassword = numbers.concat(newPassword);
  }

  // Asks the user if the password should include special characters
  var addSpecial = confirm("Should the password have special characters?");
  if (addSpecial) {
    // Adds lower letters to the potential character pool
    newPassword = specialCharacters.concat(newPassword);
  }

  // Checks if the user hasn't selected any character types to the password
  if (!addCapital && !addLower && !addNumbers && !addSpecial) {
    // Displays an alert and resets the page so you can try again
    alert("It's not secure to have a blank password!");
    window.location.reload();
  }

  // Converts the new password from a string to an array
  let arr = Array.from(newPassword);
  console.log(arr);
  let result = "";

  // Generates the password by randomly selecting characters from the array
  for (let i = 0; i < userChoice; i++) {
    result += arr[Math.floor(Math.random() * arr.length)];
  }

  // Prints the generated password in the text box on the page
  return result;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
