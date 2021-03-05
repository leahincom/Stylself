const BASE_URL = 'http://localhost:3001';
const clientID = 'c16230643d042853de4e';
const clientSecret = '7a9bc007014b501eea64b916f5d14ff2';
const tokenUrl = 'https://api.artsy.net/api/tokens/xapp_token?';
let xappToken;


async function loadList() {
    return await fetch(`${BASE_URL}/list`)
    .then(res => res.json())
}

async function getItem() {
    return await fetch(`${BASE_URL}/list/${id}`)
    .then(res => res.json())
}

export default {
  loadList,
  getItem
}