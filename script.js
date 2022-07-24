// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Global arrays for password options.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "/", "?"];

// Empty arrays for housing choices and password.
var container= "";
var passwordoutput = [];

// Function to generate the random password.
function generatePassword() {
  //Prompt for password length. 
  var passwordLength = window.prompt("How many characters would you like your password to contain? (Choose between 8 and 128)")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  } else console.log("password length",passwordLength)

  //Prompt for password options.
  var useLowerCase = confirm("Click OK to confirm including lowercase letters?");
  // console.log(useLowerCase);
  var useUpperCase = confirm("Click OK to confirm including uppercase letters?");
  // console.log(useUpperCase);
  var useNumeric = confirm("Click OK to confirm including numeric characters?");
  // console.log(useNumeric);
  var useSpecialChar = confirm("Click OK to confirm including special characters?");
  // console.log(useSpecialChar);


  //Sets of combination for password selection.
  if (useLowerCase && useUpperCase && useNumeric && useSpecialChar) {
    container = lowerCase.concat(upperCase, numeric, specialChar);
  } else if (useLowerCase && useUpperCase && useNumeric) {
    container = lowerCase.concat(upperCase, numeric);
  } else if (useLowerCase && useUpperCase && useSpecialChar) {
    container = lowerCase.concat(upperCase, specialChar);
  } else if (useLowerCase && useNumeric && useSpecialChar) {
    container = lowerCase.concat(numeric, specialChar);
  } else if (useUpperCase && useNumeric && useSpecialChar) {
    container = upperCase.concat(numeric, specialChar);
  } else if (useLowerCase && useUpperCase) {
    container = lowerCase.concat(upperCase);
  } else if (useLowerCase && useNumeric) {
    container = lowerCase.concat(numeric);
  } else if (useLowerCase && useSpecialChar) {
    container = lowerCase.concat(specialChar);
  } else if (useUpperCase && useNumeric) {
    container = upperCase.concat(numeric);
  } else if (useUpperCase&& useSpecialChar) {
    container = upperCase.concat(specialChar);
  } else if (useNumeric && useSpecialChar) {
    container = numeric.concat(useSpecialChar);
  } else if (useLowerCase) {
    container = lowerCase;
  } else if (useUpperCase) {
    container = upperCase;
  } else if (useNumeric) {
    container = numeric;
  } else if (useSpecialChar) {
    container = specialChar;
  } else (alert("You must pick at least 1"));



//Alternative solution maybe?  

  // if (useLowerCase === true) {
  //   container.concat(lowerCase);
  // }
  // if (useUpperCase === true) {
  //   container.concat(upperCase);
  // }
  // if (useNumeric === true) {
  //   container.concat(numeric);
  // }
  // if (useSpecialChar === true) {
  //   container.concat(specialChar);
  // }
  
  
//This will randomize the password choice
  for (var i = 0; i < passwordLength; i++) {
    var passwordrandom = container[Math.floor(Math.random() * container.length)];
    passwordoutput.push(passwordrandom);
  }
 
  //output for password (ask tutor about "join")
  var password = passwordoutput.join("");
  return (password);
}