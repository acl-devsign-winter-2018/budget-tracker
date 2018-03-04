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
  }).then(r => r.json());
}

function update(cat) {
  return fetch(`${URL}/${cat.id}`, {
    method: 'PUT',
    body: JSON.stringify(cat),
    headers: {
      'content-type': 'application/json'
    },
  }).then(r => r.json());
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

function addExpense(categoryId, expense) {
  return fetch(`${URL}/${categoryId}/expenses`, {
    method: 'POST',
    body: JSON.stringify(expense),
    headers: {
      'content-type': 'application/json'
    },
  }).then(r => r.json());
}

function removeExpense(categoryId, expId){
  return fetch(`${URL}/${categoryId}/expenses/${expId}`, {
    method: 'DELETE',
  }).then(r => r.json());
}

export default {
  load,
  add,
  update,
  remove,
  addExpense,
  removeExpense
};
