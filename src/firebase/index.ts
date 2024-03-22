import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxJOyPxkv8YrYjtovUMPiloDFx5q-pGWk",
  authDomain: "wrs-ductiline.firebaseapp.com",
  databaseURL: "https://wrs-ductiline-default-rtdb.firebaseio.com",
  projectId: "wrs-ductiline",
  storageBucket: "wrs-ductiline.appspot.com",
  messagingSenderId: "464830523058",
  appId: "1:464830523058:web:8c1caaf8a9a5aabdabcbab",
  measurementId: "G-HKLH50M68M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

getAnalytics(app);

const webSiteRef = (child?: string) => {
  let jsonPathUrl = "/WebSite/";
  if (child) jsonPathUrl += child;
  return ref(db, jsonPathUrl);
};

export { db, webSiteRef };
