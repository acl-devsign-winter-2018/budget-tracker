const user = 'charlieandjenny'
const URL = `https://budget-tracker-server.herokuapp.com/api/${user}/category`;

function load() {
  return fetch(URL)
    .then(response => response.json());
}

function add(category) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

export default {
  add
};