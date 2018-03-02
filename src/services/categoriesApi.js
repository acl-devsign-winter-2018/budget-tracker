const user = 'micharly';
const URL =  `https://budget-tracker-server.herokuapp.com/api/${user}/categories`;

function load() {
  return fetch(URL)
    .then(r => r.json());
}

function add(cat) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(cat),
    headers: {
      'content-type': 'application/json'
    },
  }).then( r=> r.json());
}

export default {
  load,
  add
};
