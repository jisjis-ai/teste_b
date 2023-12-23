// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDgOxlvYZTD3g10J-uyuSyKwT5EwIFdHa0",
    authDomain: "googl3-service-googl3.firebaseapp.com",
    projectId: "googl3-service-googl3",
    storageBucket: "googl3-service-googl3.appspot.com",
    messagingSenderId: "976359514606",
    appId: "1:976359514606:web:e012ba022bc78a6a3a6eff",
    measurementId: "G-LM6FL3NMSG"
  };
  

const app = firebase.initializeApp(firebaseConfig);

export const fbU = app.database().ref('Conta');
export const users = app.database().ref('users');
export const transacoes = app.database().ref('transacoes');
export const auth = app.auth();

export default firebase;
