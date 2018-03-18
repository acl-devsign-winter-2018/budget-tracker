import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyD-1G20yfbFZtD2vb5M-ZwA06n_nAEvzr4',
  authDomain: 'budget-e9091.firebaseapp.com',
  databaseURL: 'https://budget-e9091.firebaseio.com',
  projectId: 'budget-e9091',
  storageBucket: '',
  messagingSenderId: '478890514968'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;