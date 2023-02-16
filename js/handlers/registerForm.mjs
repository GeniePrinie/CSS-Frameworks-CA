export function setRegisterFormListener() {
  const formNewAccount = document.querySelector(".form-new-account");

  formNewAccount.addEventListener("submit", (e) => {
    if (!formNewAccount.checkValidity()) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log("yes");
    }
    formNewAccount.classList.add("was-validated");
  });
}
