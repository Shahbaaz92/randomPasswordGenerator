let passwordNew = document.getElementById("password");
let buttonG = document.getElementById("btn");

function getPassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890;/.,~!@#$%^&*()_-+|:?><";

  let passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  passwordNew.value = password;
}

buttonG.addEventListener("click", getPassword);
