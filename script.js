// Array of special characters to be included in password
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


// Function to prompt user for password options
function getPasswordOptions() {  
  
  prompt('');
}
getPasswordOptions()


// Creating an Obect to store all the functions
const randFunc = {
  special: genRandom,
  number: genNumbers,
  lower: genLower,
  upper: genUpper,
}

//

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
  var results = '';
  var passwordLength = window.prompt(
    "How long would you like your password to be?"
  )
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

