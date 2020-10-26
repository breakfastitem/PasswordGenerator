// Assignment Code
var generateBtn = document.querySelector("#generate");

//Object that hold password criteria
var passwordParameters = {
  //Constants
  MAXLENGTH : 128,
  MINLENGTH : 8,

  //Prompted parameters
  length : 0,
  lowerCase : false,
  upperCase : false,
  numerics : false,
  specialChar : false,

  //TODO: Prompt ALL parameters
  promptParameters(){
    var validInput=true;

    var holder = prompt("");

  }

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//TODO: Genrate password based on parameters
//generates password based on passwordParameters object
function generatePassword(passwordParameters) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
