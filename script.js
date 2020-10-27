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

  //object functions
  promptParameters : function(){
    var validInput=false;
    var holder;

    //Prompt user for length
    while(!validInput){
      holder = Number(prompt("Input password length \n MIN: "+this.MINLENGTH+ " MAX: " +this.MAXLENGTH));
      if(holder>=8&&holder<=128){
        validInput=true;
      }else{
        alert("Invalid Input");
      }
    }
    this.length=holder;
    validInput=false;

    while(!validInput){
      this.lowerCase = confirm("Allow lowercase characters in password?");
      this.upperCase = confirm("Allow Uppercase characters in password?");
      this.numerics = confirm("Allow numbers in password?");
      this.specialChar = confirm("Allow special characters in password?");

      if(this.lowerCase||this.upperCase||this.numerics||this.specialChar){
        validInput=true;
      }else{
        alert("At least one character type must be permitted.");
      }
    }

  }

};

// Write password to the #password input
function writePassword() {
  passwordParameters.promptParameters();
  
  var password = generatePassword(passwordParameters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generates password based on passwordParameters object
function generatePassword(passwordParameters) {
  var passwordArray= new Array(passwordParameters.length);
  var index=passwordArray.length-1;

  //Ensure password contains at least one of all necessary chars
  if(passwordParameters.lowerCase){
      if(passwordParameters.specialChar){
        passwordArray[index]=getRandomSpecialChar();
        index--;
      }
      if(passwordParameters.upperCase){
        passwordArray[index]=getRandomChar().toUpperCase();
        index--;
      }
      if(passwordParameters.numerics){
        passwordArray[index]=getRandomNumber();
        index--;
      }
      while(index > -1){
        passwordArray[index]=getRandomChar();
        index--;
      }
  }else if(passwordParameters.upperCase){
    if(passwordParameters.specialChar){
      passwordArray[index]=getRandomSpecialChar();
      index--;
    }
    if(passwordParameters.numerics){
      passwordArray[index]=getRandomNumber();
      index--;
    }
    while(index > -1){
      passwordArray[index]=getRandomChar().toUpperCase();
      index--;
    }
  } else if(passwordParameters.numerics){
    if(passwordParameters.specialChar){
      passwordArray[index]=getRandomSpecialChar();
      index--;
    }
    while(index > -1){
      passwordArray[index]=getRandomNumber();
      index--;
    }

  }else{
    while(index > -1){
      passwordArray[index]=getRandomSpecialChar();
      index--;
    }

  }
  var passwordString="";

  //compile return string
  for(index =0;index<passwordArray.length;index ++){
    passwordString += passwordArray[index];
  }

  return passwordString;

}

//Gets characters randomly from predifined arrays
function getRandomSpecialChar (){
  var special= ['!','/','@','#','$','%','^','&','*','?','+','-','[',']',',','.','<','>','(',')',':',';','=','{','}','_','|','~','`','\\','\"','\''];

  var index = Math.floor(Math.random()*special.length);

  return special[index];
}
function getRandomNumber (){
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];

  var index = Math.floor(Math.random()*numbers.length);

  return numbers[index];
}
function getRandomChar (){
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var index = Math.floor(Math.random()*alphabet.length);

  return alphabet[index];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
