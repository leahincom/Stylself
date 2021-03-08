const BASE_URL = "http://localhost:5000";
const clientID = "c16230643d042853de4e";
const clientSecret = "7a9bc007014b501eea64b916f5d14ff2";
const tokenUrl = "https://api.artsy.net/api/tokens/xapp_token?";
let xappToken;

const formData = new FormData();
const apiService = {};

apiService.loadList = async () => {
  return await fetch(`${BASE_URL}/list`).then((res) => res.json());
};

// apiService.getItem = () => {
//     return await fetch(`${BASE_URL}/list/${id}`)
//     .then(res => res.json())
// }

apiService.postUpload = async (uploadImg) => {
  return await fetch(`${BASE_URL}/nst_post`, {
    method: "POST",
    header: {
      "content-type": "multipart/form-data"
    },
    body: formData
  }).then((res) => res.json());
};

apiService.register = (user) => {
  // REMOVE-START
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

apiService.login = (user) => {
  // REMOVE-START
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

apiService.profile = () => {
  // REMOVE-START
  return fetch(`${BASE_URL}/me`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

apiService.logout = () => {
  // REMOVE-START
  return fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

export default apiService;
