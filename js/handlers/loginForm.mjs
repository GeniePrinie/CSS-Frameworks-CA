export function setLoginFormListener() {
  const formLogin = document.querySelector(".form-login");

  formLogin.addEventListener("submit", (e) => {
    if (!formLogin.checkValidity()) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
    }
    formLogin.classList.add("was-validated");
  });
}
