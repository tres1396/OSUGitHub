//Array of options for password criteria
var passLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    passUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    passNumbers = [1,2,3,4,5,6,7,8,9,0];
    passSpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];


//global variable
var newPassword = []



//User password prompts
function passwordOptions(){
  var length = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters!"))

  if (isNAN(length)===true){
    alert("Please choose a number between 8 and 128!")
  }
  
  if (length < 8) {
    alert("Password must be at least 8 characters!")
  }
  
  if (length > 128) {
    alert("Password must be less than 128 characters!")
  }

  var lowercaseChars= confirm("Would you like to include lowercase characters?")
  var uppercaseChars= confirm("Would you like to include uppercare characters?")
  var numericChars= confirm("Would you like to include numeric characters?")
  var specialChars= confirm("Would you like to include special characters?")

if (lowercaseChars===false && uppercaseChars===false && numericChars===false && specialChars===false){
  alert("You must select at least one of the character types in order to create a password!")
  return
}

if (lowercaseChars === true) {
  (newPassword.push(passLowercase));
}

if (uppercaseChars === true) {
  (newPassword.push(passUppercase));
}

if (numericChars === true) {
  (newPassword.push(passNumbers));
}

if (specialChars === true) {
  (newPassword.push(passSpecial));
}

var passwordChoices = {
  length: length,
  lowercaseChars: lowercaseChars,
  uppercaseChars: uppercaseChars,
  numericChars: numericChars,
  specialChars: specialChars,
}
return passwordChoices
}

//Generate password using above criteria
function generatePassword(){
  var newPWstr = newPassWd.join("");
 
  var password = "";
  
  for (var i = 0; i < length; i++) {
  var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
  password = password.concat(genChr);
  }
}
  //Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);
