import { register } from "../API/auth/register.mjs";
import { createModal } from "../API/modal.mjs";
import { reloadPage } from "../API/reload.mjs";

const formNewAccount = document.querySelector(".form-register");

export function setRegisterFormListener() {
  formNewAccount.addEventListener("submit", (e) => {
    e.preventDefault();
    formNewAccount.checkValidity();
    formNewAccount.classList.add("was-validated");

    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    register(profile)
      .then((user) => {
        handleSuccessful(user);
      })
      .catch((error) => {
        handleUnsuccessful(error);
      });
  });
}

function handleSuccessful(user) {
  createModal(`User for <b>${user.name}</b> created successfully.`);

  const clearForm = document.querySelector(".modal-close");
  clearForm.addEventListener("click", reloadPage);
}

function handleUnsuccessful(error) {
  createModal(`User not created. <em>${error.message}</em>.`);
}
