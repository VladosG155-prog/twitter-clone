import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",

    supportFile: "cypress/support/e2e.ts",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0",
  },
  env: {
    apiKey: "AIzaSyBblO9x6GvL8IPwd-wWoo-0zhll_gQ2aiU",
    authDomain: "twitter-clome-f00c1.firebaseapp.com",
    projectId: "twitter-clome-f00c1",
    storageBucket: "twitter-clome-f00c1.appspot.com",
    messagingSenderId: "436349127464",
    appId: "1:436349127464:web:d1c147001b279c86c75e1d",
  },
});
