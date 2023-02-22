import { login } from "../API/auth/login.mjs";
import { reloadPage } from "../API/reload.mjs";

export function setLoginFormListener() {
  const formLogin = document.querySelector(".form-login");

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      formLogin.checkValidity();
      formLogin.classList.add("was-validated");

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);
    });
  }
}

const clearForm = document.querySelector(".btn-submit");
clearForm.addEventListener("click", function () {
  setTimeout(reloadPage, 1000);
});
