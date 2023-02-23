import { setRegisterFormListener } from "./handlers/registerForm.mjs";
import { setLoginFormListener } from "./handlers/loginForm.mjs";
import { setLogoutFormListener } from "./handlers/logoutForm.mjs";
import { load } from "./globals/storage.mjs";

const path = location.pathname;
const token = load("token");

switch (path) {
  case "/":
  case "/index.html":
    if (token === null) {
      window.location.replace("/html/user/login");
    }
    break;

  case "/html/user/login/":
    if (token !== null) {
      window.location.replace("/");
    }
    setLoginFormListener();
    break;

  case "/html/user/register/":
    setRegisterFormListener();
    break;

  case "/html/user/logout/":
    setLogoutFormListener();
    break;

  case "/html/user/profile/":
    console.log("user/profile/");
    break;

  default:
    break;
}

// getEntry("3109")
//   .then((data) => {
//     // console.log(data);
//     // console.log(JSON.stringify(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
