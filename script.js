const form = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const termsCheckbox = document.getElementById("terms");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
  validatePassword();
  validateConfirmPassword();
  validateTerms();

  if (emailError.innerHTML === "" && passwordError.innerHTML === "" && confirmPasswordError.innerHTML === "" && termsCheckbox.checked) {
    form.submit();
  } else {
    alert("Please fill in the form correctly");
  }
});

function validateEmail() {
  const email = emailInput.value;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(email)) {
    emailError.innerHTML = "Invalid email address";
  } else {
    emailError.innerHTML = "";
  }
}

function validatePassword() {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters long";
  } else {
    passwordError.innerHTML = "";
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (confirmPassword!== password) {
    confirmPasswordError.innerHTML = "Passwords do not match";
  } else {
    confirmPasswordError.innerHTML = "";
  }
}

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsCheckbox.nextElementSibling.innerHTML = "You must agree to the terms and conditions";
  } else {
    termsCheckbox.nextElementSibling.innerHTML = "";
  }
}