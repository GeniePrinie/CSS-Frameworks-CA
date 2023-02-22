import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    method: method,
    headers: {
      "Content-Type": "application/json charset=utf-8",
    },
    body: body,
  });
  const result = await response.json();
  console.log(result);

  localStorage.setItem("token", result.accessToken);
}

const token = localStorage.getItem("token");
