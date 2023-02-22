import { setRegisterFormListener } from "./handlers/registerForm.mjs";
import { setLoginFormListener } from "./handlers/loginForm.mjs";

setLoginFormListener();
setRegisterFormListener();

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}
