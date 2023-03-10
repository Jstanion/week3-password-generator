// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {

  //Create prompt for password length of at least 8 characters and no more than 128 characters
  let passwordLength = prompt("Please select a desired password length between 8 and 128 characters:");

  //Conditional statement needed to verify the correct length is provided -> end function and return to initial prompt?
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must select a number between 8 and 128!");
    return password = ('');
  }

  //Create prompts for character types (uppercase, lowercase, numbers, special characters) included in password
  let upperCaseSelection = confirm("Would you like to include uppercase letters?");
  let lowerCaseSelection = confirm("Would you like to include lowercase letters?");
  let numberSelection = confirm("Would you like to include numbers?");
  let specialCharacterSelection = confirm("Would you like to include special characters?");
  
  //Create a conditional statement that verifies at least one character type is selected 
  if (!upperCaseSelection && !lowerCaseSelection && !numberSelection && !specialCharacterSelection) {
    alert("You must choose at least one character type!");
    return password = ('');
  }
  //List all characters available for function to choose from 
  const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const numberArray = "1234567890".split("");
  const specialCharacterArray = "!@#$%^&*()".split("");
  
  //Set the starting character array to empty
  let selectionArray = [];
  
  //Character types combined based on selection value 
  if (upperCaseSelection) {
    selectionArray = selectionArray.concat(upperCaseArray);
  }
  if (lowerCaseSelection) {
    selectionArray = selectionArray.concat(lowerCaseArray);
  }
  if (numberSelection) {
    selectionArray = selectionArray.concat(numberArray);
  }
  if (specialCharacterSelection) {
    selectionArray = selectionArray.concat(specialCharacterArray);
  }

  //Set the starting password array to empty
  let password = [];
  
  //Create one password value using randomized character array
  for (let i = 0; i < passwordLength; i++) {
    password[i] = (selectionArray[Math.floor(Math.random() * selectionArray.length)]);
  }

  //logs the password without comma seperation
  console.log(password.join(''));
  return password.join('');
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
