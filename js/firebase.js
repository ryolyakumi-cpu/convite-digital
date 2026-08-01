const firebaseConfig = {
  apiKey: "AIzaSyB0xIfdAKqNqmZWGc6O2A3kS2jXbhp58XA",
  authDomain: "convite-digital-v2-800ce.firebaseapp.com",
  projectId: "convite-digital-v2-800ce",
  storageBucket: "convite-digital-v2-800ce.firebasestorage.app",
  messagingSenderId: "638327659686",
  appId: "1:638327659686:web:7aa6df09a196048ee7a867"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log("🔥 Firebase conectado!");