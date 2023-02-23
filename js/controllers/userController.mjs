import { API_SOCIAL_URL } from "../globals/constants.mjs";
import { save, remove } from "../globals/storage.mjs";
import { fetchToken } from "../globals/api.mjs";

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
  const apiEndpoint = API_SOCIAL_URL + "/auth/login";
  const apiMethod = "POST";
  const apiBody = JSON.stringify(profile);

  const response = await fetchToken(apiEndpoint, apiMethod, apiBody);

  if (!response.ok) {
    throw new Error(`Invalid user: Http Status ${response.status}`);
  }

  const { accessToken, ...user } = await response.json();

  save("token", accessToken);
  save("profile", user);
}

export async function logout() {
  remove("token");
  remove("profile");
  //window.location.replace("/html/user/login");
}
