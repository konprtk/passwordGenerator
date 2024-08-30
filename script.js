const passwordBox = document.getElementById("password");
const copied = document.getElementById("passwordCopied");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%&*()-_=+[]{}|;:<>?/";

const allChars = upperCase + lowerCase + numbers + symbol;

function generatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value === "") {
    notCopiedToast();
  } else {
    navigator.clipboard
      .writeText(passwordBox.value)
      .then(() => {
        copiedToast();
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  }
}

function copiedToast() {
  copied.innerHTML = "Password Copied Successfully";
  copied.className = "show";
  copied.style.background = "#008000";
  setTimeout(function () {
    copied.className = copied.className.replace("show", "");
  }, 3000);
}

function notCopiedToast() {
  copied.innerHTML = "Generate Password to copy";
  copied.className = "show";
  copied.style.background = "#cc0000";
  setTimeout(function () {
    copied.className = copied.className.replace("show", "");
  }, 3000);
}
