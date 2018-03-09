const user = 'dev';
const URL = `https://budget-tracker-server.herokuapp.com/api/${user}/categories`;

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

function update(category) {
  return fetch(`${URL}/${category.id}`, {
    method: 'PUT',
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

function addExpense(categoryId, expense) {
  return fetch(`${URL}/${categoryId}/expenses`, {
    method: 'POST',
    body: JSON.stringify(expense),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function removeExpense(categoryId, expenseId) {
  return fetch(`${URL}/${categoryId}/expenses/${expenseId}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

// expense? expense.id
function updateExpense(categoryId, expense) {
  return fetch(`${URL}/${categoryId}/expenses/${expense.id}`, {
    method: 'PUT',
    body: JSON.stringify(expense.update),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

export default {
  load,
  add,
  update,
  remove,
  addExpense,
  removeExpense,
  updateExpense
};