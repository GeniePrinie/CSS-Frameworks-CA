import { register } from "../API/auth/register.mjs";

export function setRegisterFormListener() {
  const formNewAccount = document.querySelector(".form-register");
  console.log("Before event listener - making sure function runs");
  formNewAccount.addEventListener("submit", (e) => {
    formNewAccount.checkValidity();
    formNewAccount.classList.add("was-validated");

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    register(profile);
  });
}
//Password for gg (gg@stud.noroff.no) is ggTestPassword
