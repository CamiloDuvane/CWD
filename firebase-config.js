// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzL6sk0pDZtC-jtbpLNNR1dlQ94D9ccA",
  authDomain: "mea2024-d8f25.firebaseapp.com",
  databaseURL: "https://mea2024-d8f25-default-rtdb.firebaseio.com",
  projectId: "mea2024-d8f25",
  storageBucket: "mea2024-d8f25.firebasestorage.app",
  messagingSenderId: "770842232248",
  appId: "1:770842232248:web:f3da86205a5b3e6afbfb4d",
  measurementId: "G-2GMQCP11CF"
};

// Initialize Firebase with compat version (make sure to load the compat version of the SDK)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const analytics = firebase.analytics();

// Set up persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);