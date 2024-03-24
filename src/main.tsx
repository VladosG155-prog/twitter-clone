import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "@/app/appRouter";
import { store } from "@/app/store";
import { ISLOGGEDIN } from "@/entities/session/";

import "@/app/styles/global.css";

store.dispatch(ISLOGGEDIN());

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
