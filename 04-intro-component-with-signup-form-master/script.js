const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePassword()
  ) {
    alert("Form Submitted Successfully");
  }
});

function validateFirstName() {
  let firstName = document.getElementById("first_name").value;
  let errorElement = document.getElementById("first");
  let errorMessage = document.getElementById("firstMess");

  if (firstName.length === 0) {
    errorElement.style.display = "inline-flexbox";
    errorMessage.innerHTML = "First Name cannot be empty";
    return false;
  }

  errorElement.style.display = "none";
  errorMessage.innerHTML = "";
  return true;
}

function validateLastName() {
  let lastName = document.getElementById("last_name").value;
  let errorElement = document.getElementById("last");
  let errorMessage = document.getElementById("lastMess");

  if (lastName.length === 0) {
    errorElement.style.display = "inline-flexbox";
    errorMessage.innerHTML = "Last Name cannot be empty";
    return false;
  }

  errorElement.style.display = "none";
  errorMessage.innerHTML = "";
  return true;
}

function validateEmail() {
  let email = document.getElementById("inputEmail").value;
  let errorElement = document.getElementById("email");
  let errorMessage = document.getElementById("emailMess");

  if (
    email.length === 0 ||
    !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errorElement.style.display = "inline-flexbox";
    errorMessage.innerHTML = "Looks like this is not an email";

    return false;
  }

  errorElement.style.display = "none";
  errorMessage.innerHTML = "";
  return true;
}

function validatePassword() {
  let password = document.getElementById("inputPass").value;
  let errorElement = document.getElementById("password");
  let errorMessage = document.getElementById("passwordMess");

  if (password.length === 0) {
    errorElement.style.display = "inline-flexbox";
    errorMessage.innerHTML = "Password cannot be empty";

    return false;
  }

  errorElement.style.display = "none";
  errorMessage.innerHTML = "";
  return true;
}
