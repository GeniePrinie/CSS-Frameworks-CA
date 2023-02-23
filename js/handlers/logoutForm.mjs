import { remove } from "../globals/storage.mjs";

export function setLogoutFormListener() {
  remove("token");
  remove("profile");
  window.location.replace("/html/user/login");
}
