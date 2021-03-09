const BASE_URL = "http://localhost:3001";
let xappToken;

const formData = new FormData();
const apiService = {};

// apiService.loadList = async () => {
//   return await fetch(`${BASE_URL}/list`).then((res) => res.json());
// };

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
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.getMyList = () => {
  return fetch(`${BASE_URL}/mylist`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.postItem = (item) => {
  return fetch(`${BASE_URL}/mylist`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
