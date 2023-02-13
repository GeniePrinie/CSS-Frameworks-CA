const formLogin = document.querySelector(".form-login");
const formNewAccount = document.querySelector(".form-new-account");

formLogin.addEventListener("submit", (e) => {
  if (!formLogin.checkValidity()) {
    e.preventDefault();
  }
  formLogin.classList.add("was-validated");
});

formNewAccount.addEventListener("submit", (e) => {
  if (!formNewAccount.checkValidity()) {
    e.preventDefault();
  }
  formNewAccount.classList.add("was-validated");
});

// const form = document.querySelector("#contactForm");
// const fullName = document.querySelector("#name");
// const nameError = document.querySelector("#nameError");
// const subject = document.querySelector("#subject");
// const subjectError = document.querySelector("#subjectError");
// const email = document.querySelector("#email");
// const emailError = document.querySelector("#emailError");
// const textMessage = document.querySelector("#textMessage");
// const textMessageError = document.querySelector("#textMessageError");
// const submitedMessage = document.querySelector(".submited-message");

// form.addEventListener("submit", validateTheForm);

// function validateTheForm(event) {
//   event.preventDefault();
//   submitedMessage.innerHTML = "";

//   if (formValid(fullName, subject, email, textMessage)) {
//     form.reset();
//     submitedMessage.innerHTML = `<p id="submited-message">Your form has been submitted</p>`;
//   }
// }

// function formValid(name, subject, email, textMessage) {
//   let isValid = true;

//   if (checkLength(name.value, 5)) {
//     nameError.innerHTML = `<p></p>`;
//   } else {
//     nameError.innerHTML = `<p>Your name must be at least 5 characters</p>`;
//     isValid = false;
//   }

//   if (checkEmail(email.value)) {
//     emailError.innerHTML = `<p></p>`;
//   } else {
//     emailError.innerHTML = `<p>Please enter a valid email address</p>`;
//     isValid = false;
//   }

//   if (checkLength(subject.value, 15)) {
//     subjectError.innerHTML = `<p></p>`;
//   } else {
//     subjectError.innerHTML = `<p>Your subject must be at least 15 characters</p>`;
//     isValid = false;
//   }

//   if (checkLength(textMessage.value, 25)) {
//     textMessageError.innerHTML = `<p></p>`;
//   } else {
//     textMessageError.innerHTML = `<p>Your message must be at least 25 characters</p>`;
//     isValid = false;
//   }
//   return isValid;
// }

// function checkLength(value, len) {
//   if (value !== undefined && value.trim().length >= len) {
//     return true;
//   }
//   return false;
// }

// function checkEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const matchPattern = regEx.test(email);
//   return matchPattern;
// }
