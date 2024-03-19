import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import Typesense from "typesense";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_apiKey || "mock",
  authDomain: process.env.VITE_authDomain || "mock",
  projectId: process.env.VITE_projectId || "mock",
  storageBucket: process.env.VITE_storageBucket || "mock",
  messagingSenderId: process.env.VITE_messagingSenderId || "mock",
  appId: process.env.VITE_appId || "mock",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = firebase.firestore(app);
export const storage = getStorage(app);

if (!process.env.JEST_WORKER_ID) {
  enableIndexedDbPersistence(db);
}

export const client = new Typesense.Client({
  nodes: [
    {
      host: "cq70go6iru1fk8n4p-1.a1.typesense.net",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: "1wSMAJMczXrEK0MYazlL68mHrJRDMma1",
  connectionTimeoutSeconds: 2,
});
