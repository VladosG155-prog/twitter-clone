import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import Typesense from "typesense";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = firebase.firestore(app);
export const storage = getStorage(app);
db.enablePersistence();
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
