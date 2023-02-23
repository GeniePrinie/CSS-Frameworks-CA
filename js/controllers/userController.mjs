import { API_SOCIAL_URL } from "../globals/constants.mjs";
import { save, remove } from "../globals/storage.mjs";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + "/auth/register";
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    method: "post",
    headers: { "Content-Type": "application/json charset=utf-8" },
    body: body,
  });

  if (!response.ok) {
    throw new Error(`Invalid user input: Http Status ${response.status}`);
  }

  return await response.json();
}

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + "/auth/login";
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    method: "post",
    headers: { "Content-Type": "application/json charset=utf-8" },
    body: body,
  });
  const { accessToken, ...user } = await response.json();

  save("token", accessToken);
  save("profile", user);
}

export async function logout() {
  remove("token");
  remove("profile");
}
