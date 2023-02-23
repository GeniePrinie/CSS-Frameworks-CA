import { API_SOCIAL_URL, API_EXTRA_DATA } from "../globals/constants.mjs";
import { fetchData } from "../globals/api.mjs";

export async function getEntry(id) {
  const apiEndpoint = API_SOCIAL_URL + "/posts/" + id + API_EXTRA_DATA;
  const apiMethod = "GET";
  const apiBody = "";

  const response = await fetchData(apiEndpoint, apiMethod, apiBody);

  if (!response.ok) {
    throw new Error(`Invalid entry id: Http Status ${response.status}`);
  }

  return await response.json();
}

export async function getEntries() {
  const apiEndpoint = API_SOCIAL_URL + "/posts";
  const apiMethod = "GET";
  const apiBody = "";

  const response = await fetchData(apiEndpoint, apiMethod, apiBody);

  if (!response.ok) {
    throw new Error(`Invalid endpoint: Http Status ${response.status}`);
  }

  return await response.json();
}

// export async function createEntry(postData) {
// const createEntryURL = API_SOCIAL_URL + action;
// const token = load("token");

// const response = await authfetch(createEntryURL, {
//     method: "POST",
//     body: JSON.stringify(postData),
// });

// const entry = await response.json();
// console.log(entry);
// }

// export async function updateEntry(postData) {
// const createEntryURL = API_SOCIAL_URL + action;
// const token = load("token");

// const response = await authfetch(createEntryURL, {
//     method: "POST",
//     body: JSON.stringify(postData),
// });

// const entry = await response.json();
// console.log(entry);
// }

// export async function removeEntry(postData) {
// const createEntryURL = API_SOCIAL_URL + action;
// const token = load("token");

// const response = await authfetch(createEntryURL, {
//     method: "POST",
//     body: JSON.stringify(postData),
// });

// const entry = await response.json();
// console.log(entry);
// }
