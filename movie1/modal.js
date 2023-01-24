const register = document.querySelector("#register");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signIn = document.querySelector("#signIn");
const signIn_userName = document.querySelector("#signIn-userName");
const signIn_password = document.querySelector("#signIn-password");
const signIn_userNameError = document.querySelector("#signIn-userNameError");
const signIn_passwordError = document.querySelector("#signIn-passwordError");
const logIn = document.querySelector("#logIn");
const mataMata = document.querySelector("#mataMata");
const mata = document.querySelector("#mata");
const eye = document.querySelector("#eye");

const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const validateUsername = (type) => {
  let value = "";
  let error = null;
  if (type === "signIn") {
    value = signIn_userName.value.trim();
    error = signIn_userNameError;
  } else {
    value = username.value.trim();
    error = usernameError;
  }
  error.innerText = "";
  if (!value) {
    error.innerText = "Username is required";
    return {
      value,
      error,
    };
  } else if (value.length < 5 || value.length > 16) {
    error.innerText = "Username must be between 5 to 16 characters";
    return {
      value,
      error,
    };
  }
  return {
    value,
    error: null,
  };
};
const validateEmail = () => {
  const emailValue = email.value.trim();
  const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  emailError.innerText = "";

  if (!emailValue) {
    emailError.innerText = "Email is required";
  } else if (!emailValidator.test(emailValue)) {
    emailError.innerText = "Please enter a valid email";
  }
};

const validatePassword = (type) => {
  let value = "";
  let error = null;
  if (type === "signIn") {
    value = signIn_password.value.trim();
    error = signIn_passwordError;
  } else {
    value = password.value.trim();
    error = passwordError;
  }
  const passwordValidator = /^[a-zA-Z]\w{3,14}$/;
  error.innerText = "";
  if (!value) {
    error.innerText = "Password is required";
    return {
      value,
      error,
    };
  }
  if (!passwordValidator.test(value)) {
    error.innerText =
      "Password must contain at least 5 characters, a digit, a symbol, and an uppercase letter";
    return {
      value,
      error,
    };
  }
  return {
    value,
    error: null,
  };
};

const validateConfirmPassword = () => {
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;
  confirmPasswordError.innerText = "";
  if (passwordValue !== confirmValue) {
    confirmPasswordError.innerText = "Password does not match";
  }
};

register.addEventListener("submit", (e) => {
  e.preventDefault();

  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
});

signIn.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = validateUsername("signIn");
  const password = validatePassword("signIn");
  if (username.error != null || password.error != null) return;

  if (username.value == "admin" && password.value == "admin123") {
    alert("Login successfully");
    // window.location.href = "home.html";
    // return false;
  } else {
    alert("You have put an incorrect username/password!");
    // return false;
  }
});

logIn.addEventListener("click", (e) => {
  e.preventDefault();
  logIn.setAttribute("data-bs-toggle", "modal");
  logIn.setAttribute("data-bs-target", "#staticBackdrop");
});

mataMata.addEventListener("click", () => {
  const type = password.getAttribute("type");
  if (type == "text") {
    password.setAttribute("type", "password");
    mataMata.className = "bi bi-eye-slash";
  } else {
    password.setAttribute("type", "text");
    mataMata.className = "bi bi-eye";
  }
});
mata.addEventListener("click", () => {
  const type = signIn_password.getAttribute("type");
  if (type == "text") {
    signIn_password.setAttribute("type", "password");
    mata.className = "bi bi-eye-slash";
  } else {
    signIn_password.setAttribute("type", "text");
    mata.className = "bi bi-eye";
  }
});
eye.addEventListener("click", () => {
  const type = confirmPassword.getAttribute("type");
  if (type == "text") {
    confirmPassword.setAttribute("type", "password");
    eye.className = "bi bi-eye-slash";
  } else {
    confirmPassword.setAttribute("type", "text");
    eye.className = "bi bi-eye";
  }
});
