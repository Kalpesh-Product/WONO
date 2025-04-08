const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGAME73QnMycl0OfZsyB3SUBEPOjavnJE",
  authDomain: "wono-53c6b.firebaseapp.com",
  projectId: "wono-53c6b",
  storageBucket: "wono-53c6b.appspot.com",
  messagingSenderId: "414172890545",
  appId: "1:414172890545:web:4e5852116487a5faaaa990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage
const storage = getStorage(app);

// Now you can use the `storage` object to upload files to Firebase Storage
module.exports = { storage }
