import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
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
firebase.firestore().settings({
  experimentalForceLongPolling: true,
});
export const db = firebase.firestore(app);
db.settings({
  merge: true,
  experimentalForceLongPolling: true,
});
export const storage = getStorage(app);
/* 
if (location.hostname === "localhost") {
  console.log("@localhost");
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  db.useEmulator("127.0.0.1", 8080);
}
 */
if (!process.env.JEST_WORKER_ID) {
  enableIndexedDbPersistence(db, { forceOwnership: true });
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
