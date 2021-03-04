const BASE_URL = 'http://localhost:3001';


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