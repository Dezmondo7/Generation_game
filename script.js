// Array of special characters to be included in password

//var generateBtn = document.querySelector('#generate');

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function for getting a random element from an array
function genRandom(specialCharacters) {
  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
}
console.log(genRandom(specialCharacters));

//Function to generate a random number
function genNumbers(numericCharacters) {
  return numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
}
console.log(genNumbers(numericCharacters));

//function to generate a random lowerCase
function genLower(lowerCasedCharacters) {
  return lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
}
console.log(genLower(lowerCasedCharacters));

//function to generate a random Uppercase
function genUpper(upperCasedCharacters) {
  return upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
}
console.log(genUpper(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
  var results = "";
  var passwordLength = window.prompt(
    "How long would you like your password to be?"
  );

  var charNo = parseInt(passwordLength);

  if (charNo > 7 && charNo < 129) {

    var specialChoice = window.confirm(
      "Do you want to use special characters in your password?"
    )

    var numberChoice = window.confirm(
      "Do you want to use numbers in your password?"
    )

    var lowerChoice = window.confirm(
      "Do you want to use non capital letters in your password?"
    );

    var capitalChoice = window.confirm(
      "Do you want to use capital letters in your password?"
    ); 

   } else {  
    window.alert("This is an invalid selection please log a number from between 8 and 128");
    return generatePassword();
  }

    var answers = [] 

      if (specialChoice === true) answers.push(specialCharacters);

      if (numberChoice === true) answers.push(numericCharacters);

      if (lowerChoice === true) answers.push(lowerCasedCharacters);

      if (capitalChoice === true) answers.push(upperCasedCharacters);

      if (lowerCasedCharacters || upperCasedCharacters || numericCharacters || specialCharacters) {

      for (var i = 0; i < charNo; i++) {
      results += answers[Math.floor(Math.random()*answers.length)];
      }

     } else {
        window.alert(
          "A minumum of one selection must be confirmed(ok)"
        )
        return generatePassword()
        }
        return results;
      }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

