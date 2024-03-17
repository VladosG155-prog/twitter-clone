import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ISLOGGEDIN } from "@/entities/session/model/actions";

import { appRouter } from "./appRouter";
import { store } from "./store";

import "./styles/global.css";

store.dispatch(ISLOGGEDIN());

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
