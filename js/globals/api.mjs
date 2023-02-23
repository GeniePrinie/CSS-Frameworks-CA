import { load } from "../globals/storage.mjs";

export async function fetchData(url, method, body) {
  const token = load("token");
  let options = {
    method: method,
    body: body,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  };

  if (body === "") {
    options = {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    };
  }

  return await fetch(url, options);
}
